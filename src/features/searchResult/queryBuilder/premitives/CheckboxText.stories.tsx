import { useState } from "react";
import { CheckboxText } from "./CheckboxText.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: CheckboxText,
  args: {},
  decorators: [
    (Story, { args }) => {
      const [isSelected, setIsSelected] = useState(false);
      return <Story args={{ ...args, isSelected, setIsSelected }} />;
    },
  ],
} satisfies Meta<typeof CheckboxText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    labelStr: "no-link",
    value: "noLink",
  },
} satisfies Story;

export const WithLink = {
  args: {
    labelStr: "with-link",
    value: "withLink",
    to: "https://example.com",
  },
} satisfies Story;
