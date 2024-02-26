import { Meta, StoryObj } from "@storybook/react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const meta: Meta<typeof LanguageSwitcher> = {
  component: LanguageSwitcher,
};
export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;
export const Primary: Story = {
  args: {},
};
