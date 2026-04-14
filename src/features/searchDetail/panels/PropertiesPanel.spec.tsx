import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";
import { PropertiesPanel } from "./PropertiesPanel.tsx";

type ElementWithChildren = ReactElement<{ children: ReactElement[] }>;
type TooltipElement = ReactElement<{ isOpen?: boolean }>;

const renderTooltip = (tooltipOpen?: boolean) => {
  const element = PropertiesPanel({
    data: { Project: { name: "example" } },
    tooltipOpen,
  }) as ElementWithChildren;
  const heading = element.props.children[0] as ElementWithChildren;
  return heading.props.children[0] as TooltipElement;
};

describe("PropertiesPanel", () => {
  it("keeps tooltip uncontrolled by default", () => {
    const tooltip = renderTooltip();
    expect(tooltip.props.isOpen).toBeUndefined();
  });

  it("does not force open when explicitly false", () => {
    const tooltip = renderTooltip(false);
    expect(tooltip.props.isOpen).toBeUndefined();
  });

  it("can force tooltip open for story review", () => {
    const tooltip = renderTooltip(true);
    expect(tooltip.props.isOpen).toBe(true);
  });
});
