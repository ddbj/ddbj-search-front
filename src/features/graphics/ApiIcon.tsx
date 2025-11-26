import { type TailwindElementProps } from "@/types.ts";

// https://fontawesome.com/icons/square-terminal?f=sharp&s=regular
export const ApiIcon = ({ className }: TailwindElementProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className}>
    <path d="M400 80l0 352-352 0 0-352 352 0zM48 32l-48 0 0 448 448 0 0-448-400 0zM86.1 176l80 80c-49.7 49.7-76.4 76.4-80 80l33.9 33.9 17-17 80-80 17-17c-.8-.8-33.1-33.1-97-97l-17-17-33.9 33.9zM216 336l-24 0 0 48 160 0 0-48-136 0z" />
  </svg>
);
