import { TypeSelector } from "@/features/queryBuilder/organisms/TypeSelector.tsx";
import { sbGetRouter } from "@/utils/storybook.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: TypeSelector,
  args: {},
  decorators: [],
} satisfies Meta<typeof TypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const HasSearch = {
  decorators: [
    (Story) => {
      const router = sbGetRouter();
      router.navigate({
        to: "/entry",
        search: {
          datePublished: {
            start: "2025-03-10",
            end: "2025-03-11",
          },
          dateUpdated: {
            start: "2025-07-10",
            end: "2025-07-11",
          },
          types: ["biosample", "sra-analysis"],
        },
      });
      return <Story />;
    },
  ],
} satisfies Story;
