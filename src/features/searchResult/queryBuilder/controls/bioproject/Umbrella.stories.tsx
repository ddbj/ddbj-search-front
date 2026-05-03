import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { sleep } from "@/utils/sleep.ts";
import { Umbrella } from "./Umbrella.tsx";

const mockUpdateUmbrella = fn((_v: boolean) => {});

const meta = {
  component: Umbrella,
  args: {
    value: false,
    update: mockUpdateUmbrella,
    count: 100000,
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Umbrella>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const ToggleUmbrella = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateUmbrella.mockReset();
    const checkbox = await canvas.findByRole("checkbox", { name: "Umbrella Project (100,000)" });
    await userEvent.click(checkbox);
    await expect(mockUpdateUmbrella).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateUmbrella).toBeCalledTimes(1);
    await expect(mockUpdateUmbrella).toHaveBeenLastCalledWith(true);
  },
} satisfies Story;
