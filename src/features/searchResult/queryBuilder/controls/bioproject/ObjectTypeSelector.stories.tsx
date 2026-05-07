import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import type { BioProjectObjectType } from "@/api/consts.ts";
import { sleep } from "@/utils/sleep.ts";
import { ObjectTypeSelector } from "./ObjectTypeSelector.tsx";

const mockUpdateObjectTypes = fn((_value: BioProjectObjectType[]) => {});

const meta = {
  component: ObjectTypeSelector,
  args: {
    value: [],
    update: mockUpdateObjectTypes,
    countData: [
      { value: "BioProject", count: 900 },
      { value: "UmbrellaBioProject", count: 100 },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-[384px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ObjectTypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const ToggleObjectType = {
  play: async ({ canvas, userEvent }) => {
    mockUpdateObjectTypes.mockReset();
    await expect(await canvas.findByRole("checkbox", { name: "BioProject (900)" })).toBeEnabled();
    const umbrellaCheckbox = await canvas.findByRole("checkbox", {
      name: "Umbrella BioProject (100)",
    });

    await userEvent.click(umbrellaCheckbox);
    await expect(mockUpdateObjectTypes).toBeCalledTimes(0);
    await sleep(300);
    await expect(mockUpdateObjectTypes).toBeCalledTimes(1);
    await expect(mockUpdateObjectTypes).toHaveBeenLastCalledWith(["UmbrellaBioProject"]);
  },
} satisfies Story;
