import { renameSync, existsSync } from "fs";
import { join } from "path";

const apiDir = join(process.cwd(), "src", "app", "api");
const backupDir = join(process.cwd(), "src", "app", "_api_disabled");

if (existsSync(apiDir)) {
  if (existsSync(backupDir)) {
    renameSync(backupDir, apiDir);
  }
  renameSync(apiDir, backupDir);
  console.log("Disabled API routes for static export.");
}
