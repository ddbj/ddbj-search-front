import { BioprojectOrganization } from "./BioprojectOrganization.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: BioprojectOrganization,
  args: {},
  decorators: [],
} satisfies Meta<typeof BioprojectOrganization>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
