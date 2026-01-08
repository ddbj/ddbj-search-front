export const safeParseUrl = (url: string): URL | null => {
  if (url.startsWith("/")) {
    const protocol = window.location.protocol;
    const host = window.location.hostname;
    const port = window.location.port;
    url = protocol + "://" + host + ":" + port;
  }
  let result: URL | null = null;
  try {
    result = new URL(url);
  } catch (e) {
    console.warn(e);
    result = null;
  }
  return result;
};
