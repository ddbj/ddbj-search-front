import { Meta, StoryObj } from "@storybook/react";
import { SraSample } from "./SraSample.tsx";

const meta: Meta<typeof SraSample> = {
  component: SraSample,
};
export default meta;

type Story = StoryObj<typeof SraSample>;
export const Primary: Story = {
  args: {},
};
