import { spawnSync } from "child_process";
import { existsSync, renameSync } from "fs";
import { join } from "path";

const root = process.cwd();
const apiDir = join(root, "src", "app", "api");
const backupDir = join(root, "src", "app", "_api_disabled");

if (existsSync(apiDir)) {
  if (existsSync(backupDir)) renameSync(backupDir, apiDir);
  renameSync(apiDir, backupDir);
  console.log("Disabled API routes for static export.");
}

const result = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    NEXT_OUTPUT: "export",
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? "/Portfolio",
  },
});

if (existsSync(backupDir) && !existsSync(apiDir)) {
  renameSync(backupDir, apiDir);
  console.log("Restored API routes.");
}

process.exit(result.status ?? 1);
