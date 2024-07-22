import { Meta, StoryObj } from "@storybook/react";
import { RefLinks } from "./RefLinks";
import { bioproject3 } from "@/data/bioproject3.ts";

const meta: Meta<typeof RefLinks> = {
  component: RefLinks,
};
export default meta;

type Story = StoryObj<typeof RefLinks>;
export const Primary: Story = {
  args: {
    refs: bioproject3.dbXrefs,
    title: "dbXrefs",
  },
};
