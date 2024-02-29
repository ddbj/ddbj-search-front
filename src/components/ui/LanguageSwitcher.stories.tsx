import { Meta, StoryObj } from "@storybook/react";
import { LocaleSwitcher } from "./LocaleSwitcher.tsx";

const meta: Meta<typeof LocaleSwitcher> = {
  component: LocaleSwitcher,
};
export default meta;

type Story = StoryObj<typeof LocaleSwitcher>;
export const Primary: Story = {
  args: {},
};
