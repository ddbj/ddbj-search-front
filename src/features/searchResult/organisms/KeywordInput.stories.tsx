import { expect, fn } from "storybook/test";
import { sleep } from "@/utils/sleep.ts";
import { KeywordInput } from "./KeywordInput.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta = {
  component: KeywordInput,
  args: {
    value: [""],
  },
  decorators: [],
} satisfies Meta<typeof KeywordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: { update: () => {} },
} satisfies Story;

const mockChangeKeywords = fn((e) => {
  // console.log(e);
});
export const update = {
  args: { update: mockChangeKeywords },
  play: async ({ canvas, canvasElement, userEvent, step }) => {
    mockChangeKeywords.mockReset();
    const input = canvasElement.querySelector("input")!;
    await userEvent.type(input, "foo");
    await expect(mockChangeKeywords).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockChangeKeywords).toBeCalledTimes(1);
  },
} satisfies Story;
