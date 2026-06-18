import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import z from "zod";

export const extendZod = () => {
  extendZodWithOpenApi(z);
};
