import { Meta, StoryObj } from "@storybook/react";
import { SraExperiment } from "./SraExperiment";

const meta: Meta<typeof SraExperiment> = {
  component: SraExperiment,
};
export default meta;

type Story = StoryObj<typeof SraExperiment>;
export const Primary: Story = {
  args: {},
};
