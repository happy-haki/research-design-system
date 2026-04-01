import { describe, expect, it } from "vitest";
import { createCssVariables } from "./css";

describe("createCssVariables", () => {
  it("generates semantic root css variables", () => {
    const css = createCssVariables();

    expect(css).toContain(":root {");
    expect(css).toContain("--rds-color-background");
    expect(css).toContain("--rds-space-md");
  });
});
