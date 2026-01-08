export const safeParseUrl = (url: string): URL | null => {
  if (url.startsWith("/")) {
    const protocol = window.location.protocol;
    const host = window.location.hostname;
    const port = window.location.port;
    const portSegment = port ? `:${port}` : "";
    url = `${protocol}//${host}${portSegment}${url}`;
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
