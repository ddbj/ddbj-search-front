import { type TailwindElementProps } from "@/types.ts";

// https://fontawesome.com/icons/copy?f=sharp&s=regular
export const CopyIcon = ({ className }: TailwindElementProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className}>
    <path d="M400 336l-224 0 0-288 156.1 0 67.9 67.9 0 220.1zM448 96l-96-96-224 0 0 384 320 0 0-288zM48 128l-48 0 0 384 320 0 0-80-48 0 0 32-224 0 0-288 32 0 0-48-32 0z" />
  </svg>
);
