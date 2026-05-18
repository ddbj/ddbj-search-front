import { type TailwindElementProps } from "@/types.ts";

// https://fontawesome.com/icons/square-poll-horizontal?f=sharp&s=regular
export const StatusIcon = ({ className }: TailwindElementProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={className}>
    <path d="M144 144L144 496L496 496L496 144L144 144zM96 96L544 96L544 544L96 544L96 96zM352 248L192 248L192 200L352 200L352 248zM448 296L448 344L192 344L192 296L448 296zM288 440L192 440L192 392L288 392L288 440z" />
  </svg>
);
