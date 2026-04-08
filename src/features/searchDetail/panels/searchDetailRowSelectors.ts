import type { SearchDetailResponse } from "@/api/types.ts";

export const getPublications = (res: SearchDetailResponse) => {
  if (res.type === "bioproject") {
    return res.publication;
  } else {
    return null;
  }
};

export const getGrants = (res: SearchDetailResponse) => {
  if (res.type === "bioproject") {
    return res.grant;
  } else {
    return null;
  }
};

export const getOrganizations = (res: SearchDetailResponse) => {
  if (res.type === "bioproject") {
    return res.organization;
  } else {
    return null;
  }
};

export const getExternalLinks = (res: SearchDetailResponse) => {
  return res.externalLink;
};

export const getSameAs = (res: SearchDetailResponse) => {
  return res.sameAs;
};

export const getAttributes = (res: SearchDetailResponse) => {
  if (res.type === "biosample") {
    return res.attributes;
  } else {
    return null;
  }
};
