import { Meta, StoryObj } from "@storybook/react";
import { DownloadLinks } from "./DownloadLinks";
import { bioproject1 } from "@/data/bioproject1.ts";

const meta: Meta<typeof DownloadLinks> = {
  component: DownloadLinks,
};
export default meta;

type Story = StoryObj<typeof DownloadLinks>;
export const Primary: Story = {
  args: {
    downloadUrl: bioproject1.downloadUrl,
  },
};
