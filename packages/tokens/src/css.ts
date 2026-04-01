import { darkTokens, lightTokens } from "./tokens.js";
import type { DtcgGroup, DtcgToken } from "./types.js";

const isToken = (value: DtcgGroup | DtcgToken): value is DtcgToken => {
  return typeof value === "object" && value !== null && "$value" in value;
};

const flattenTokens = (group: DtcgGroup, path: string[] = []): Array<[string, string]> => {
  const entries: Array<[string, string]> = [];

  for (const [key, value] of Object.entries(group)) {
    const nextPath = [...path, key];

    if (isToken(value)) {
      entries.push([`--rds-${nextPath.join("-")}`, String(value.$value)]);
      continue;
    }

    entries.push(...flattenTokens(value, nextPath));
  }

  return entries;
};

export const createCssVariables = (): string => {
  const rootDeclarations = flattenTokens(lightTokens)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join("\n");

  const darkDeclarations = flattenTokens(darkTokens)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join("\n");

  return `:root {\n${rootDeclarations}\n}\n\n.dark {\n${darkDeclarations}\n}`;
};
