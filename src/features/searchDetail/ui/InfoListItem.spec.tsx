import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";
import { InfoListItem } from "./InfoListItem.tsx";

type ElementWithChildren = ReactElement<{ children: ReactElement[] }>;
type TooltipElement = ReactElement<{ isOpen?: boolean }>;

const renderTooltip = (tooltipOpen?: boolean) => {
  const element = InfoListItem({
    term: "Example Term",
    toolTipContent: "Tooltip body",
    tooltipOpen,
    children: "Example content",
  }) as ElementWithChildren;
  const header = element.props.children[0] as ElementWithChildren;
  return header.props.children[0] as TooltipElement;
};

describe("InfoListItem", () => {
  it("keeps tooltip uncontrolled by default", () => {
    const tooltip = renderTooltip();
    expect(tooltip.props.isOpen).toBeUndefined();
  });

  it("can force tooltip open for story review", () => {
    const tooltip = renderTooltip(true);
    expect(tooltip.props.isOpen).toBe(true);
  });
});
