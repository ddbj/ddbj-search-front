import { Meta, StoryObj } from "@storybook/react";
<<<<<<< HEAD
import { CommonRows } from "./CommonRows";

const meta: Meta<typeof CommonRows> = {
  component: CommonRows,
};
export default meta;

type Story = StoryObj<typeof CommonRows>;
=======
import { CommonTitle } from "@/components/ui/detail/rows/CommonRows.tsx";

const meta: Meta<typeof CommonTitle> = {
  component: CommonTitle,
};
export default meta;

type Story = StoryObj<typeof CommonTitle>;
>>>>>>> feature/propertyFold
export const Primary: Story = {
  args: {},
};
