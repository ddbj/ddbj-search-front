import { Meta, StoryObj } from "@storybook/react";
import { Properties } from "./Properties";
import { bioproject3 } from "@/data/bioproject3.ts";

const meta: Meta<typeof Properties> = {
  component: Properties,
};
export default meta;

type Story = StoryObj<typeof Properties>;
export const Primary: Story = {
  args: {
    title: "properties",
    codeObj: bioproject3.properties,
  },
};
