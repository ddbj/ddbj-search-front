import { describe, expect, it } from "vitest";
import { humanizeLabel } from "@/utils/humanize.ts";

describe("humanizeLabel", () => {
  it("splits camelCase boundaries and capitalizes each word", () => {
    expect(humanizeLabel("isPartOf")).toBe("Is Part Of");
    expect(humanizeLabel("dbXrefs")).toBe("Db Xrefs");
    expect(humanizeLabel("libraryStrategy")).toBe("Library Strategy");
    expect(humanizeLabel("geoLocName")).toBe("Geo Loc Name");
  });

  it("capitalizes single words", () => {
    expect(humanizeLabel("identifier")).toBe("Identifier");
    expect(humanizeLabel("status")).toBe("Status");
  });

  it("does not break on inputs that already contain spaces", () => {
    expect(humanizeLabel("project type")).toBe("Project Type");
    expect(humanizeLabel("external link")).toBe("External Link");
  });

  it("returns empty string for empty input", () => {
    expect(humanizeLabel("")).toBe("");
  });

  it("collapses consecutive whitespace into a single boundary", () => {
    expect(humanizeLabel("a  b")).toBe("A B");
  });

  it("trims leading and trailing whitespace", () => {
    expect(humanizeLabel("  abc  ")).toBe("Abc");
  });

  it("is idempotent for already humanized inputs", () => {
    expect(humanizeLabel("Status")).toBe("Status");
    expect(humanizeLabel(humanizeLabel("isPartOf"))).toBe("Is Part Of");
  });

  it("treats digit-to-uppercase as a boundary", () => {
    expect(humanizeLabel("url2API")).toBe("Url2 API");
  });

  it("preserves runs of uppercase letters that are not followed by lowercase boundaries", () => {
    expect(humanizeLabel("ABC")).toBe("ABC");
  });
});
