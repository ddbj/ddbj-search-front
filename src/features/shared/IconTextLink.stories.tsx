import { HomeIcon } from "@/features/graphics/HomeIcon.tsx";
import { IconTextLink } from "./IconTextLink.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: IconTextLink,
  args: {},
  decorators: [],
} satisfies Meta<typeof IconTextLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    label: "DDBJ Search Home",
    to: "/",
    Icon: HomeIcon,
  },
} satisfies Story;
