import type { Meta, StoryObj } from "@storybook/react-vite";
import { AttributesPanel } from "./AttributesPanel.tsx";

const meta = {
  component: AttributesPanel,
  args: {
    attributes: [
      {
        key: "source name",
        value: "ATCC cell line cells",
      },
      {
        key: "cell type",
        value: "ATCC cell line cells",
      },
      {
        key: "patient donor/cell_line",
        value: "BPH-1",
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="max-w-5xl p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AttributesPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
