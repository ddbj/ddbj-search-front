import type { SearchDetailResponse } from "@/api/types.ts";

export const getPublications = (res: SearchDetailResponse) => {
  return res.publication;
};

export const getGrants = (res: SearchDetailResponse) => {
  return res.grant;
};

export const getOrganizations = (res: SearchDetailResponse) => {
  return res.organization;
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
