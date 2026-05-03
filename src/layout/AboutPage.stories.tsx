import type { Meta, StoryObj } from "@storybook/react-vite";
import { AboutPage } from "./AboutPage.tsx";

const meta = {
  component: AboutPage,
  args: {},
  decorators: [],
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
