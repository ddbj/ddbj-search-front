import { describe, it, expect } from "vitest";
import { dbTypes } from "@/consts/db.ts";
import { __TEST_updateFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { BaseSearchParams } from "@/schema/search/base.ts";
const {
  removeFromSearch,
  composeKeywords,
  composeDBTypes,
  composeUpdated,
  composePublished,
  composeUmbrella,
  composeOrganization,
  composePublication,
  composeGrant,
} = __TEST_updateFunctions;

describe("removeFromSearch", () => {
  describe("emptyObject", () => {
    const current: BaseSearchParams = {};
    it("", () => {
      const result = removeFromSearch(current, "keywords", "");
      expect(result).not.toBe(current);
      expect(result).toEqual({});
    });
  });
  describe("withParams", () => {
    const current: AnySearchParams = {
      keywords: ["human", " cat"],
      types: ["sra-analysis", "jga-study"],
      datePublished: "2025-07-01,2025-07-10",
      dateUpdated: "2024-07-01,2024-07-10",
      page: 2,
    };
    it("", () => {
      const result = removeFromSearch(current, "keywords", "cat");
      expect(result).toEqual({
        keywords: ["human"],
        types: ["sra-analysis", "jga-study"],
        datePublished: "2025-07-01,2025-07-10",
        dateUpdated: "2024-07-01,2024-07-10",
      });
    });
    it("", () => {
      const result1 = removeFromSearch(current, "keywords", "cat");
      const result2 = removeFromSearch(result1, "keywords", "human");
      expect(result2).toEqual({
        types: ["sra-analysis", "jga-study"],
        datePublished: "2025-07-01,2025-07-10",
        dateUpdated: "2024-07-01,2024-07-10",
      });
    });
    it("", () => {
      const result = removeFromSearch(current, "types", "sra-analysis");
      expect(result).toEqual({
        keywords: ["human", " cat"],
        types: ["jga-study"],
        datePublished: "2025-07-01,2025-07-10",
        dateUpdated: "2024-07-01,2024-07-10",
      });
    });
    it("", () => {
      const result = removeFromSearch(current, "datePublished", "");
      expect(result).toEqual({
        keywords: ["human", " cat"],
        types: ["sra-analysis", "jga-study"],
        dateUpdated: "2024-07-01,2024-07-10",
      });
    });
    it("", () => {
      const result = removeFromSearch(current, "dateUpdated", "");
      expect(result).toEqual({
        keywords: ["human", " cat"],
        types: ["sra-analysis", "jga-study"],
        datePublished: "2025-07-01,2025-07-10",
      });
    });
  });
});

describe("composeKeywords", () => {
  it("should add keywords when none are present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeKeywords(prev, ["a"]);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      keywords: ["a"],
    };
    expect(result).toEqual(expected);
  });
  it("should remove keywords when the input is an empty array", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], keywords: ["a"] };
    const result = composeKeywords(prev, []);
    const expected: AnySearchParams = { types: [dbTypes.bioproject] };
    expect(result).toEqual(expected);
  });
  it("should reset the page number when keywords are changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeKeywords(prev, ["a"]);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      keywords: ["a"],
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when keywords are not changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2, keywords: ["a"] };
    const result = composeKeywords(prev, ["a"]);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      keywords: ["a"],
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when keywords remain empty", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeKeywords(prev, []);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composeDBTypes", () => {
  it("should add types when none are present", () => {
    const prev: AnySearchParams = { keywords: ["a"] };
    const result = composeDBTypes(prev, [dbTypes.bioproject]);
    const expected: AnySearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });

  it("should remove types when the input is an empty array", () => {
    const prev: AnySearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
    };
    const result = composeDBTypes(prev, []);
    const expected: AnySearchParams = { keywords: ["a"] };
    expect(result).toEqual(expected);
  });

  it("should reset the page number when types are changed", () => {
    const prev: AnySearchParams = { keywords: ["a"], page: 2 };
    const result = composeDBTypes(prev, [dbTypes.bioproject]);
    const expected: AnySearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when types are not changed", () => {
    const prev: AnySearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeDBTypes(prev, [dbTypes.bioproject]);
    const expected: AnySearchParams = {
      keywords: ["a"],
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when types remain empty", () => {
    const prev: AnySearchParams = {
      keywords: ["a"],
      page: 2,
    };
    const result = composeDBTypes(prev, []);
    const expected: AnySearchParams = {
      keywords: ["a"],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composeUpdated", () => {
  it("should add dateUpdated when none is present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeUpdated(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      dateUpdated: "2024-01-01,2024-01-31",
    };
    expect(result).toEqual(expected);
  });

  it("should remove dateUpdated the input is an empty string", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      dateUpdated: "2023-01-01,2023-01-31",
    };
    const result = composeUpdated(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });

  it("should reset the page number when dateUpdated is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeUpdated(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      dateUpdated: "2024-01-01,2024-01-31",
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when dateUpdated is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      dateUpdated: "2024-01-01,2024-01-31",
    };
    const result = composeUpdated(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      dateUpdated: "2024-01-01,2024-01-31",
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when dateUpdated remains empty", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeUpdated(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composePublished", () => {
  it("should add datePublished when none is present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composePublished(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      datePublished: "2024-01-01,2024-01-31",
    };
    expect(result).toEqual(expected);
  });
  it("should remove datePublished the input is an empty string", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      datePublished: "2023-01-01,2023-01-31",
    };
    const result = composePublished(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });
  it("should reset the page number when datePublished is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composePublished(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      datePublished: "2024-01-01,2024-01-31",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when datePublished is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      datePublished: "2024-01-01,2024-01-31",
    };
    const result = composePublished(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      datePublished: "2024-01-01,2024-01-31",
    };
    expect(result).toEqual(expected);
  });
  it("should should preserve the page number when dateUpdated remains empty", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composePublished(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composeUmbrella", () => {
  it("should add umbrella when none is present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeUmbrella(prev, true);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      umbrella: true,
    };
    expect(result).toEqual(expected);
  });
  it("should remove umbrella the input is false", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      umbrella: true,
    };
    const result = composeUmbrella(prev, false);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });
  it("should reset the page number when umbrella is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeUmbrella(prev, true);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      umbrella: true,
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when umbrella is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      umbrella: true,
    };
    const result = composeUmbrella(prev, true);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      umbrella: true,
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when umbrella remains false", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeUmbrella(prev, false);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composeOrganization", () => {
  it("should add organization when none is present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeOrganization(prev, "OrgName");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      organization: "OrgName",
    };
    expect(result).toEqual(expected);
  });
  it("should remove organization the input is an empty string", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      organization: "OrgName",
    };
    const result = composeOrganization(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });
  it("should reset the page number when organization is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeOrganization(prev, "OrgName");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      organization: "OrgName",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when organization is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      organization: "OrgName",
    };
    const result = composeOrganization(prev, "OrgName");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      organization: "OrgName",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when organization remains empty", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeOrganization(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composePublication", () => {
  it("should add publication when none is present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composePublication(prev, "PubName");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      publication: "PubName",
    };
    expect(result).toEqual(expected);
  });
  it("should remove publication the input is an empty string", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      publication: "PubName",
    };
    const result = composePublication(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });
  it("should reset the page number when publication is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composePublication(prev, "PubName");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      publication: "PubName",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when publication is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      publication: "PubName",
    };
    const result = composePublication(prev, "PubName");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      publication: "PubName",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when publication remains empty", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composePublication(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composeGrant", () => {
  it("should add grant when none is present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeGrant(prev, "GrantName");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      grant: "GrantName",
    };
    expect(result).toEqual(expected);
  });
  it("should remove grant the input is an empty string", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      grant: "GrantName",
    };
    const result = composeGrant(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });
  it("should reset the page number when grant is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeGrant(prev, "GrantName");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      grant: "GrantName",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when grant is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      grant: "GrantName",
    };
    const result = composeGrant(prev, "GrantName");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      grant: "GrantName",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when grant remains empty", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeGrant(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});
