import { QueryTip } from "@/features/searchResult/queryBuilder/premitives/QueryTip.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: QueryTip,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    label: { name: "types", value: "BioSample" },
    data: { name: "types", value: "BioSample" },
    onClickRemove: (name, value) => {
      console.log(name, value);
    },
  },
} satisfies Meta<typeof QueryTip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
