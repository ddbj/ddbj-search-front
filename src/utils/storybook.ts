import { expect } from "storybook/test";

export const getRouter = () => {
  const router = window.__STORYBOOK_ROUTER__;
  if (!router) throw new Error("Router not found");
  return router;
};

export const findBySlot = async (key: string) => {
  const result = document.querySelector(`[data-slot=${key}]`);
  await expect(result).toBeInTheDocument();
  return result!;
};
export const findByListValue = async (key: string) => {
  const result = document.querySelector(`li[role="option"][data-key="${key}"]`);
  await expect(result).toBeInTheDocument();
  return result!;
};
