import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs } from "./Breadcrumbs.tsx";

const meta = {
  component: Breadcrumbs,
  args: {},
  decorators: [],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    paths: [{ label: "bioproject", to: "/bioproject" }, { label: "PRJNA610111" }],
  },
} satisfies Story;
