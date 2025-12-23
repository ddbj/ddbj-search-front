import { DownloadListItem } from "./DownloadListItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DownloadListItem,
  args: {
    fileName: "example_file.txt",
    httpsLink: "https://example.com/example_file.txt",
    ftpLink: "ftp://example.com/example_file.txt",
  },
  decorators: [],
} satisfies Meta<typeof DownloadListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
