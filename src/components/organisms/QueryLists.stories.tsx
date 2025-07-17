import { QueryLists } from "@/components/organisms/QueryLists.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: QueryLists,
  args: {},
  decorators: [
    (Story) => (
      <div className="w-72 bg-gray-100 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof QueryLists>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty = {
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
} satisfies Story;

export const HasSearch = {
  decorators: [
    (Story) => {
      const router = window.__STORYBOOK_ROUTER__;
      if (!router) throw new Error("Router not found");
      router.navigate({
        to: "/all",
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
