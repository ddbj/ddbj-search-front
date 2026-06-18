import { isDBType, type DBType } from "@/consts/db.ts";

const APP_BASE_PATH = "/search";
const DDBJ_HOSTS = new Set(["ddbj.nig.ac.jp", "www.ddbj.nig.ac.jp", "ddbj-staging.nig.ac.jp"]);

export type ResolvedDbLink =
  | {
      kind: "internal";
      to: string;
    }
  | {
      kind: "external";
      href: string;
    };

export const resolveDbLink = (link: string): ResolvedDbLink => {
  const url = parseUrl(link);
  if (!url || !isDdbjHost(url)) return { kind: "external", href: link };

  const internalEntry = parseInternalEntryPath(url.pathname);
  if (!internalEntry) return { kind: "external", href: link };

  return { kind: "internal", to: makeEntryTo(internalEntry.type, internalEntry.identifier) };
};

const parseUrl = (link: string) => {
  try {
    return new URL(link, "https://ddbj.nig.ac.jp");
  } catch {
    return null;
  }
};

const isDdbjHost = (url: URL) => DDBJ_HOSTS.has(url.hostname);

const parseInternalEntryPath = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  const entryIndex = segments[0] === "search" ? 1 : 0;
  if (segments[entryIndex] === "entry") {
    return parseTypeAndIdentifier(segments[entryIndex + 1], segments[entryIndex + 2]);
  }
  if (segments[0] === "resource") {
    return parseTypeAndIdentifier(segments[1], segments[2]);
  }
  return null;
};

const parseTypeAndIdentifier = (type: string | undefined, identifier: string | undefined) => {
  if (!type || !isDBType(type) || !identifier) return null;
  return { type, identifier };
};

const makeEntryTo = (type: DBType, identifier: string) => `/entry/${type}/${identifier}/`;

export const __TEST__sanitizeDbLink = {
  APP_BASE_PATH,
};
