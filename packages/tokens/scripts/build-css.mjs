import { mkdir, writeFile } from "node:fs/promises";
import { createCssVariables } from "../dist/css.js";

await mkdir(new URL("../dist", import.meta.url), { recursive: true });
await writeFile(new URL("../dist/tokens.css", import.meta.url), createCssVariables(), "utf8");
