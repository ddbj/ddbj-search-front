import { CheckboxText } from "./CheckboxText.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: CheckboxText,
  args: {},
  decorators: [],
} satisfies Meta<typeof CheckboxText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    labelStr: "no-link",
  },
} satisfies Story;

export const WithLink = {
  args: {
    labelStr: "with-link",
    link: "https://example.com",
  },
} satisfies Story;
