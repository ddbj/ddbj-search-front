import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusPage } from "./StatusPage.tsx";

const meta = {
  component: StatusPage,
  args: {},
  decorators: [],
} satisfies Meta<typeof StatusPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
