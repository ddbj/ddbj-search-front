import { expect, fn } from "storybook/test";
import { sleep } from "@/utils/sleep.ts";
import { Organization } from "./Organization.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const mockUpdateOrganization = fn((_value: string) => {});

const meta = {
  component: Organization,
  args: {
    value: "",
    update: mockUpdateOrganization,
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Organization>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const DebouncedUpdate = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateOrganization.mockReset();
    const input = await canvas.findByRole("textbox", { name: "Organization" });
    await userEvent.type(input, "Genome Center");
    await expect(mockUpdateOrganization).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateOrganization).toBeCalledTimes(1);
    await expect(mockUpdateOrganization).toHaveBeenLastCalledWith("Genome Center");
  },
} satisfies Story;
