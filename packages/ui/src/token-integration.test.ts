import { describe, expect, it } from "vitest";
import { createCssVariables } from "@research-ds/tokens/css";

describe("tokens integration", () => {
  it("contains variables consumed by ui styles", () => {
    const css = createCssVariables();

    expect(css).toContain("--rds-color-primary");
    expect(css).toContain("--rds-color-background");
    expect(css).toContain(".dark {");
  });
});
