import type { Meta, StoryObj } from "@storybook/react-vite";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { StatusPanel } from "./StatusPanel.tsx";

const meta = {
  component: StatusPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof StatusPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    data: bioproject1,
  },
} satisfies Story;

export const ControlledAccess = {
  args: {
    data: {
      ...bioproject1,
      accessibility: "controlled-access",
    },
  },
} satisfies Story;
