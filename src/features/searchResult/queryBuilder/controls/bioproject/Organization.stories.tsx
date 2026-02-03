import { Organization } from "./Organization.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Organization,
  args: {
    value: "",
    update: (v: string) => {},
  },
  decorators: [],
} satisfies Meta<typeof Organization>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
