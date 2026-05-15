import type { Meta, StoryObj } from "@storybook/react-vite";
import { AttributesPanel } from "./AttributesPanel.tsx";

const meta = {
  component: AttributesPanel,
  args: {
    attributes: [
      {
        attribute_name: "source_name",
        display_name: "source name",
        harmonized_name: "source_name",
        content: "ATCC cell line cells",
      },
      {
        attribute_name: "cell type",
        display_name: "cell type",
        harmonized_name: "cell_type",
        content: "ATCC cell line cells",
      },
      {
        attribute_name: "patient donor/cell_line",
        display_name: "",
        harmonized_name: "",
        content: "BPH-1",
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
