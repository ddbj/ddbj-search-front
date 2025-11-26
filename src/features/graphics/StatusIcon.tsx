import { type TailwindElementProps } from "@/types.ts";

// https://fontawesome.com/icons/square-poll-horizontal?f=sharp&s=regular
export const StatusIcon = ({ className }: TailwindElementProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className}>
    <path d="M48 80l0 352 352 0 0-352-352 0zM0 32l448 0 0 448-448 0 0-448zM256 184l-160 0 0-48 160 0 0 48zm96 48l0 48-256 0 0-48 256 0zM192 376l-96 0 0-48 96 0 0 48z" />
  </svg>
);
