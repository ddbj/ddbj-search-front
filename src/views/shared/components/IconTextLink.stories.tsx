import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeIcon } from "@/views/shared/icons/HomeIcon.tsx";
import { IconTextLink } from "./IconTextLink.tsx";

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
