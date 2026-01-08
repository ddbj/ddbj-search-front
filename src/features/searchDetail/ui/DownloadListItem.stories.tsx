import { DownloadListItem } from "./DownloadListItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DownloadListItem,
  args: {},
  decorators: [],
} satisfies Meta<typeof DownloadListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    fileName: "example_file.txt",
    httpsLink: "https://example.com/example_file.txt",
    ftpLink: "ftp://example.com/example_file.txt",
  },
} satisfies Story;

export const BrokenLink = {
  args: {
    fileName: "example_file.txt",
    httpsLink: "http://localhost:6006/data/not_exist.json",
    ftpLink: "ftp://example.com/example_file.txt",
  },
} satisfies Story;

export const ValidLink = {
  args: {
    fileName: "storybook favicon",
    httpsLink: "/favicon.svg",
  },
};
