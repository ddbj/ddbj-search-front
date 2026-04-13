import { expect, fn } from "storybook/test";
import { sleep } from "@/utils/sleep.ts";
import { KeywordInput } from "./KeywordInput.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const mockChangeKeywords = fn((_value: string[]) => {});

const meta = {
  component: KeywordInput,
  args: {
    value: [""],
    update: mockChangeKeywords,
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof KeywordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const DebouncedUpdate = {
  play: async ({ canvasElement, userEvent }) => {
    mockChangeKeywords.mockReset();
    const input = canvasElement.querySelector("input")!;
    await userEvent.type(input, "foo, bar");
    await expect(mockChangeKeywords).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockChangeKeywords).toBeCalledTimes(1);
    await expect(mockChangeKeywords).toHaveBeenLastCalledWith(["foo", "bar"]);
  },
} satisfies Story;
