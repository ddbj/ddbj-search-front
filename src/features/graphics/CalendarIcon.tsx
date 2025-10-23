import { type TailwindElementProps } from "@/types.ts";

// https://fontawesome.com/icons/calendar-range?f=sharp&s=regular
export const CalendarIcon = ({ className }: TailwindElementProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={className}>
    <path d="M144 24l0-24-48 0 0 64-96 0 0 416 448 0 0-416-96 0 0-64-48 0 0 64-160 0 0-40zm160 88l96 0 0 320-352 0 0-320 256 0zM96 192l0 64 64 0 0-64-64 0zM352 320l-64 0 0 64 64 0 0-64zM192 192l0 48 168 0 0-48-168 0zM96 320l0 48 160 0 0-48-160 0z" />
  </svg>
);
