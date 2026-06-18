import DOMPurify from "dompurify";

export const sanitizeHTML = (val: string | null | undefined) => {
  return DOMPurify.sanitize(val ?? "", { ALLOWED_TAGS: [] });
};
