import { SearchResultPage } from "@/components/pages/SearchResultPage.tsx";
import { getRouter } from "@/utils/storybook.ts";
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
    const router = getRouter();
    router.navigate({ to: "/bioproject" });
  },
} satisfies Story;
