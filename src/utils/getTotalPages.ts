export const getTotalPages = (itemCount: number, perPage: number) => {
  if (itemCount === 0) return 1;
  return Math.ceil(itemCount / perPage);
};
