import { QueryTip } from "@/components/morecules/QueryTip.tsx";
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
    label: { name: "type", value: "BioSample" },
    data: { name: "type", value: "BioSample" },
    onClickRemove: (name, value) => {
      console.log(name, value);
    },
  },
} satisfies Meta<typeof QueryTip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
