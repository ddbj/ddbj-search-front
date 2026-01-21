import { type TailwindElementProps } from "@/types.ts";

// https://fontawesome.com/icons/square-minus?f=sharp&s=regular
export const SquareMinusIcon = ({ className }: TailwindElementProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className}>
    <path d="M48 80l0 352 352 0 0-352-352 0zM0 32l448 0 0 448-448 0 0-448zM136 232l200 0 0 48-224 0 0-48 24 0z" />
  </svg>
);
