import { SearchResultPage } from "@/pages/SearchResultPage.tsx";
import { sbGetRouter } from "@/utils/storybook.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: SearchResultPage,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
} satisfies Meta<typeof SearchResultPage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const SearchAll = {} satisfies Story;
export const BioProject = {
  play: async () => {
    const router = sbGetRouter();
    router.navigate({ to: "/entry/bioproject", from: "/" });
  },
} satisfies Story;
