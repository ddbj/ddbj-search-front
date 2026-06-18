import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, screen } from "storybook/test";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { PropertiesPanel } from "./PropertiesPanel.tsx";

const meta = {
  component: PropertiesPanel,
  args: {
    data: bioproject1.properties,
  },
  decorators: [
    (Story) => (
      <div className="max-w-5xl p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PropertiesPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(await canvas.findByRole("button", { name: "Open Properties" }));
    await expect(await screen.findByRole("dialog", { name: "Properties" })).toBeInTheDocument();
    await expect(await screen.findByRole("button", { name: "Copy JSON" })).toBeInTheDocument();
  },
} satisfies Story;
