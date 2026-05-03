import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { sleep } from "@/utils/sleep.ts";
import { Publication } from "./Publication.tsx";

const mockUpdatePublication = fn((_value: string) => {});

const meta = {
  component: Publication,
  args: {
    value: "",
    update: mockUpdatePublication,
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Publication>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const DebouncedUpdate = {
  play: async ({ canvas, userEvent }) => {
    mockUpdatePublication.mockReset();
    const input = await canvas.findByRole("textbox", { name: "Publication" });
    await userEvent.type(input, "Nature");
    await expect(mockUpdatePublication).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockUpdatePublication).toBeCalledTimes(1);
    await expect(mockUpdatePublication).toHaveBeenLastCalledWith("Nature");
  },
} satisfies Story;
