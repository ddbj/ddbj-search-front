import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { sleep } from "@/utils/sleep.ts";
import { Grant } from "./Grant.tsx";

const mockUpdateGrant = fn((_value: string) => {});

const meta = {
  component: Grant,
  args: {
    value: "",
    update: mockUpdateGrant,
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Grant>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const DebouncedUpdate = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateGrant.mockReset();
    const input = await canvas.findByRole("textbox", { name: "Grant" });
    await userEvent.type(input, "NSF");
    await expect(mockUpdateGrant).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateGrant).toBeCalledTimes(1);
    await expect(mockUpdateGrant).toHaveBeenLastCalledWith("NSF");
  },
} satisfies Story;
