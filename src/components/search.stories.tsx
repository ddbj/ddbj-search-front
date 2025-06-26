import { Search } from "@/components/search.tsx";
import { expect, userEvent } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Search,
  decorators: [
    (Story) => (
      <div className="w-4xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary = {} satisfies Story;

const findBySlot = async (key: string) => {
  const result = document.querySelector(`[data-slot=${key}]`);
  await expect(result).toBeInTheDocument();
  return result!;
};
const findByListValue = async (key: string) => {
  const result = document.querySelector(`li[role="option"][data-key="${key}"]`);
  await expect(result).toBeInTheDocument();
  return result!;
};

export const Play: Story = {
  play: async () => {
    //
    const trigger = await findBySlot("trigger");
    await userEvent.click(trigger);
    //
    const all = await findByListValue("all");
    const bioSample = await findByListValue("biosample");
    const bioProject = await findByListValue("bioproject");
    //
    await userEvent.click(bioSample);
    await userEvent.click(bioProject);
    expect(bioSample.ariaSelected).toBe("true");
    expect(bioProject.ariaSelected).toBe("true");
    //
    await userEvent.click(all);
    expect(all.ariaSelected).toBe("true");
    expect(bioSample.ariaSelected).toBe("false");
    expect(bioProject.ariaSelected).toBe("false");
    //
    await userEvent.click(bioSample);
    expect(all.ariaSelected).toBe("false");
    expect(bioSample.ariaSelected).toBe("true");
  },
};
