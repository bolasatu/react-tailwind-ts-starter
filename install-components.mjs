import { readFileSync } from "node:fs"
import { spawnSync } from "node:child_process"

const items = readFileSync("component-list.txt", "utf8").split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith("#"))
const failed = items.filter(item => spawnSync("npx", ["shadcn@latest", "add", item, "--yes"], { stdio: "inherit", shell: true }).status !== 0)
console.log(failed.length ? `\nFailed:\n${failed.join("\n")}` : `\nInstalled ${items.length} components`)