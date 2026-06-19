/**
 * Optional script to refresh GitHub-derived data via gh CLI.
 * Run: npm run fetch-github
 *
 * Requires: gh auth login with repo scope
 */

import { execSync } from "child_process";
import { writeFileSync } from "fs";
import { join } from "path";

function gh(cmd: string): string {
  return execSync(`gh ${cmd}`, { encoding: "utf-8" }).trim();
}

function main() {
  console.log("Fetching GitHub profile...");

  const user = JSON.parse(gh("api user"));
  console.log(`Logged in as: ${user.login}`);

  const repos = JSON.parse(
    gh(
      'api graphql -f query=\'query { viewer { repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: UPDATED_AT, direction: DESC}) { nodes { name isPrivate languages(first: 20) { edges { node { name } } } } } } }\'',
    ),
  );

  const publicRepos = repos.data.viewer.repositories.nodes.filter(
    (r: { isPrivate: boolean }) => !r.isPrivate,
  );

  const langSet = new Set<string>();
  for (const repo of publicRepos) {
    for (const edge of repo.languages.edges) {
      langSet.add(edge.node.name);
    }
  }

  const prs = JSON.parse(
    gh("search prs --author=" + user.login + " --limit 30 --json title,repository,state,url"),
  );

  const output = {
    fetchedAt: new Date().toISOString(),
    login: user.login,
    publicRepoCount: publicRepos.length,
    languages: Array.from(langSet).sort(),
    recentPRs: prs.map(
      (pr: {
        title: string;
        state: string;
        url: string;
        repository: { nameWithOwner: string };
      }) => ({
        repo: pr.repository.nameWithOwner,
        title: pr.title,
        state: pr.state,
        url: pr.url,
      }),
    ),
  };

  const outPath = join(process.cwd(), "src", "data", "github-snapshot.json");
  writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`Wrote snapshot to ${outPath}`);
  console.log(`Languages found: ${output.languages.join(", ")}`);
}

main();
