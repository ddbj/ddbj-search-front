import { Meta, StoryObj } from "@storybook/react";
import { BioProject } from "./BioProject";

const meta: Meta<typeof BioProject> = {
  component: BioProject,
};
export default meta;

type Story = StoryObj<typeof BioProject>;
export const Primary: Story = {
  args: {},
};
