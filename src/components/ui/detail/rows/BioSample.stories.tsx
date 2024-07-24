import { Meta, StoryObj } from "@storybook/react";
import { BioSample } from "./BioSample";

const meta: Meta<typeof BioSample> = {
  component: BioSample,
};
export default meta;

type Story = StoryObj<typeof BioSample>;
export const Primary: Story = {
  args: {},
};
