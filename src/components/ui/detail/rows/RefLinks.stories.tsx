import { Meta, StoryObj } from "@storybook/react";
import { RefLinks } from "./RefLinks";
import { bioproject2 } from "@/data/bioproject2.ts";
import { getDbXrefs } from "@/utils/apiWrappers.ts";

const meta: Meta<typeof RefLinks> = {
  component: RefLinks,
};
export default meta;

type Story = StoryObj<typeof RefLinks>;
export const Primary: Story = {
  args: {
    refs: getDbXrefs(bioproject2),
    title: "dbXrefs",
  },
};
