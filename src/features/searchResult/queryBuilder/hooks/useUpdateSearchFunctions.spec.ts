import { describe, it, expect } from "vitest";
import { dbTypes } from "@/consts/db.ts";
import { __TEST_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { BaseSearchParams } from "@/schema/search/base.ts";
const {
  removeFromSearch,
  composeSort,
  composeKeywords,
  composeOrganism,
  composeDBTypes,
  composeObjectTypes,
  composeDateModified,
  composeDatePublished,
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
      datePublishedFrom: "2025-07-01",
      datePublishedTo: "2025-07-10",
      dateModifiedFrom: "2024-07-01",
      dateModifiedTo: "2024-07-10",
      page: 2,
    };
    it("", () => {
      const result = removeFromSearch(current, "keywords", "cat");
      expect(result).toEqual({
        keywords: ["human"],
        types: ["sra-analysis", "jga-study"],
        datePublishedFrom: "2025-07-01",
        datePublishedTo: "2025-07-10",
        dateModifiedFrom: "2024-07-01",
        dateModifiedTo: "2024-07-10",
      });
    });
    it("", () => {
      const result1 = removeFromSearch(current, "keywords", "cat");
      const result2 = removeFromSearch(result1, "keywords", "human");
      expect(result2).toEqual({
        types: ["sra-analysis", "jga-study"],
        datePublishedFrom: "2025-07-01",
        datePublishedTo: "2025-07-10",
        dateModifiedFrom: "2024-07-01",
        dateModifiedTo: "2024-07-10",
      });
    });
    it("", () => {
      const result = removeFromSearch(current, "types", "sra-analysis");
      expect(result).toEqual({
        keywords: ["human", " cat"],
        types: ["jga-study"],
        datePublishedFrom: "2025-07-01",
        datePublishedTo: "2025-07-10",
        dateModifiedFrom: "2024-07-01",
        dateModifiedTo: "2024-07-10",
      });
    });
    it("", () => {
      const result = removeFromSearch(current, ["datePublishedFrom", "datePublishedTo"], "");
      expect(result).toEqual({
        keywords: ["human", " cat"],
        types: ["sra-analysis", "jga-study"],
        dateModifiedFrom: "2024-07-01",
        dateModifiedTo: "2024-07-10",
      });
    });
    it("", () => {
      const result1 = removeFromSearch(current, "dateModifiedFrom", "");
      const result2 = removeFromSearch(result1, "dateModifiedTo", "");
      expect(result2).toEqual({
        keywords: ["human", " cat"],
        types: ["sra-analysis", "jga-study"],
        datePublishedFrom: "2025-07-01",
        datePublishedTo: "2025-07-10",
      });
    });
    it("", () => {
      const result = removeFromSearch({ ...current, organism: "562" }, "organism", "562");
      expect(result).toEqual({
        keywords: ["human", " cat"],
        types: ["sra-analysis", "jga-study"],
        datePublishedFrom: "2025-07-01",
        datePublishedTo: "2025-07-10",
        dateModifiedFrom: "2024-07-01",
        dateModifiedTo: "2024-07-10",
      });
    });
  });
});

describe("composeSort", () => {
  it("should add sort", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeSort(prev, "dateModified:asc");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      sort: "dateModified:asc",
    };
    expect(result).toEqual(expected);
  });
  it("should remove sort", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], sort: "dateModified:asc" };
    const result = composeSort(prev, null);
    const expected: AnySearchParams = { types: [dbTypes.bioproject] };
    expect(result).toEqual(expected);
  });
  it("should reset the page number when sort is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeSort(prev, "dateModified:asc");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      sort: "dateModified:asc",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when sort is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      sort: "dateModified:asc",
      page: 2,
    };
    const result = composeSort(prev, "dateModified:asc");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      sort: "dateModified:asc",
      page: 2,
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when sort is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeSort(prev, null);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
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

describe("composeOrganism", () => {
  it("should add organism when none is present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeOrganism(prev, "562");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      organism: "562",
    };
    expect(result).toEqual(expected);
  });

  it("should remove organism when the input is null", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      organism: "562",
    };
    const result = composeOrganism(prev, null);
    const expected: AnySearchParams = { types: [dbTypes.bioproject] };
    expect(result).toEqual(expected);
  });

  it("should reset the page number when organism is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], organism: "562", page: 2 };
    const result = composeOrganism(prev, "9606");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      organism: "9606",
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when organism is not changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], organism: "562", page: 2 };
    const result = composeOrganism(prev, "562");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      organism: "562",
      page: 2,
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when organism remains empty", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeOrganism(prev, null);
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

describe("composeObjectTypes", () => {
  it("should add objectTypes when none are present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeObjectTypes(prev, ["BioProject"]);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      objectTypes: ["BioProject"],
    };
    expect(result).toEqual(expected);
  });

  it("should remove objectTypes when the input is an empty array", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      objectTypes: ["BioProject"],
    };
    const result = composeObjectTypes(prev, []);
    const expected: AnySearchParams = { types: [dbTypes.bioproject] };
    expect(result).toEqual(expected);
  });

  it("should reset the page number when objectTypes are changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      objectTypes: ["BioProject"],
      page: 2,
    };
    const result = composeObjectTypes(prev, ["UmbrellaBioProject"]);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      objectTypes: ["UmbrellaBioProject"],
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when objectTypes are not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      objectTypes: ["BioProject", "UmbrellaBioProject"],
      page: 2,
    };
    const result = composeObjectTypes(prev, ["BioProject", "UmbrellaBioProject"]);
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      objectTypes: ["BioProject", "UmbrellaBioProject"],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composeDateModified", () => {
  it("should add dateUpdated when none is present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeDateModified(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      dateModifiedFrom: "2024-01-01",
      dateModifiedTo: "2024-01-31",
    };
    expect(result).toEqual(expected);
  });

  it("should remove dateUpdated the input is an empty string", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      dateModifiedFrom: "2023-01-01",
      dateModifiedTo: "2023-01-31",
    };
    const result = composeDateModified(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });

  it("should reset the page number when dateUpdated is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeDateModified(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      dateModifiedFrom: "2024-01-01",
      dateModifiedTo: "2024-01-31",
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when dateUpdated is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      dateModifiedFrom: "2024-01-01",
      dateModifiedTo: "2024-01-31",
    };
    const result = composeDateModified(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      dateModifiedFrom: "2024-01-01",
      dateModifiedTo: "2024-01-31",
    };
    expect(result).toEqual(expected);
  });

  it("should preserve the page number when dateUpdated remains empty", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeDateModified(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    expect(result).toEqual(expected);
  });
});

describe("composeDatePublished", () => {
  it("should add datePublished when none is present", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject] };
    const result = composeDatePublished(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      datePublishedFrom: "2024-01-01",
      datePublishedTo: "2024-01-31",
    };
    expect(result).toEqual(expected);
  });
  it("should remove datePublished the input is an empty string", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      datePublishedFrom: "2023-01-01",
      datePublishedTo: "2023-01-31",
    };
    const result = composeDatePublished(prev, "");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
    };
    expect(result).toEqual(expected);
  });
  it("should reset the page number when datePublished is changed", () => {
    const prev: AnySearchParams = { types: [dbTypes.bioproject], page: 2 };
    const result = composeDatePublished(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      datePublishedFrom: "2024-01-01",
      datePublishedTo: "2024-01-31",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when datePublished is not changed", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      datePublishedFrom: "2024-01-01",
      datePublishedTo: "2024-01-31",
    };
    const result = composeDatePublished(prev, "2024-01-01,2024-01-31");
    const expected: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
      datePublishedFrom: "2024-01-01",
      datePublishedTo: "2024-01-31",
    };
    expect(result).toEqual(expected);
  });
  it("should preserve the page number when datePublished remains empty", () => {
    const prev: AnySearchParams = {
      types: [dbTypes.bioproject],
      page: 2,
    };
    const result = composeDatePublished(prev, "");
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
