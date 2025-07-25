import { DateSelector } from "@/features/queryBuilder/organisms/DateSelector.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DateSelector,
  args: {},
  decorators: [],
} satisfies Meta<typeof DateSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const hasSearch = {
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
        },
      });
      return <Story />;
    },
  ],
} satisfies Story;
