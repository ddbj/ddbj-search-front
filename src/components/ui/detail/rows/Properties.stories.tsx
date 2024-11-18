import { Meta, StoryObj } from "@storybook/react";
import { Properties } from "./Properties";
import { bioproject2 } from "@/data/bioproject2.ts";

const meta: Meta<typeof Properties> = {
  component: Properties,
};
export default meta;

type Story = StoryObj<typeof Properties>;
export const Primary: Story = {
  args: {
    title: "properties",
    codeObj: bioproject2.properties,
  },
};
export const Short: Story = {
  args: {
    title: "properties",
    codeObj: {
      test: "this is a short property",
    },
  },
};
