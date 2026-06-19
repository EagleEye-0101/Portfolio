import { renameSync, existsSync } from "fs";
import { join } from "path";

const apiDir = join(process.cwd(), "src", "app", "api");
const backupDir = join(process.cwd(), "src", "app", "_api_disabled");

if (existsSync(backupDir) && !existsSync(apiDir)) {
  renameSync(backupDir, apiDir);
  console.log("Restored API routes.");
}
