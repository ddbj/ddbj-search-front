import { SearchResultPage } from "@/components/pages/SearchResultPage.tsx";
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
export const Primary = {} satisfies Story;
