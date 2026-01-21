import { type TailwindElementProps } from "@/types.ts";

// https://fontawesome.com/icons/square-plus?f=sharp&s=regular
export const SquarePlusIcon = ({ className }: TailwindElementProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className}>
    <path d="M48 80l0 352 352 0 0-352-352 0zM0 32l448 0 0 448-448 0 0-448zM200 368l0-88-88 0 0-44 88 0 0-88 48 0 0 88 88 0 0 44-88 0 0 88-48 0z" />
  </svg>
);
