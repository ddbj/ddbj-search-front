import { Meta, StoryObj } from "@storybook/react";
import { DownloadLinks } from "./DownloadLinks";
import { sraRun1 } from "@/data/sraRun1.ts";

const meta: Meta<typeof DownloadLinks> = {
  component: DownloadLinks,
};
export default meta;

const data = sraRun1;
type Story = StoryObj<typeof DownloadLinks>;
export const Primary: Story = {
  args: {
    data,
  },
};
