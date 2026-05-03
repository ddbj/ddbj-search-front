import { toast } from "@heroui/react";
import { clsx } from "clsx";
import { type FC, useCallback, useEffect, useRef, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyIcon } from "@/features/graphics/CopyIcon.tsx";
import { SquareMinusIcon } from "@/features/graphics/SquareMinusIcon.tsx";
import { SquarePlusIcon } from "@/features/graphics/SquarePlusIcon.tsx";
import { type TailwindElementProps } from "@/types.ts";

SyntaxHighlighter.registerLanguage("json", json);
type ToolbarIcon = FC<TailwindElementProps>;
type ToolbarAction = {
  Icon: ToolbarIcon;
  label: string;
  onPress: () => void;
};

type Props = {
  additionalActions?: ToolbarAction[];
  code: string;
  forceExpand?: boolean;
  initialHeight?: string;
  maxExpandedHeight?: string;
  maxLinesForHighlighter?: number;
};

const DEFAULT_INITIAL_HEIGHT = "11rem";
const DEFAULT_MAX_LINES_FOR_HIGHLIGHTER = 10_000;
const TOOLBAR_BUTTON_CLASS =
  "flex h-fit w-fit cursor-pointer rounded-sm bg-white fill-gray-800 p-0.5 align-middle";

export const PrettyJSON: FC<Props> = ({
  additionalActions,
  code,
  forceExpand = false,
  initialHeight = DEFAULT_INITIAL_HEIGHT,
  maxExpandedHeight,
  maxLinesForHighlighter = DEFAULT_MAX_LINES_FOR_HIGHLIGHTER,
}) => {
  const [isExpanded, setIsExpanded] = useState(forceExpand);
  const [showExpand, setShowExpand] = useState(false);
  const [rowHeight, setRowHeight] = useState(initialHeight);
  const lineLength = code.match(/\n/g)?.length ?? 0;
  const useHighlighter = lineLength <= maxLinesForHighlighter;
  const isForceExpanded = forceExpand;
  const isDisplayExpanded = isForceExpanded || isExpanded;
  const classNames = clsx("relative grid w-full overflow-hidden transition-all duration-500");
  const ref = useRef<HTMLPreElement | null>(null);
  const PreWithRef: FC = (preProps) => (
    <pre className={"overflow-y-scroll"} {...preProps} ref={ref} />
  );
  const init = useCallback(() => {
    if (!ref.current) return;
    const { scrollHeight, clientHeight } = ref.current;
    setShowExpand(!isForceExpanded && useHighlighter && scrollHeight > clientHeight);
  }, [isForceExpanded, useHighlighter]);
  const toggleExpand = useCallback(() => {
    if (!ref.current) return;
    const { scrollHeight } = ref.current;
    isDisplayExpanded
      ? setRowHeight(maxExpandedHeight ?? `${scrollHeight}px`)
      : setRowHeight(initialHeight);
  }, [initialHeight, isDisplayExpanded, maxExpandedHeight]);
  useEffect(() => {
    init();
  }, [init]);
  useEffect(() => {
    toggleExpand();
  }, [isExpanded, toggleExpand]);
  useEffect(() => {
    setIsExpanded(isForceExpanded);
    init();
  }, [code, init, initialHeight, isForceExpanded]);

  return (
    <div className="relative overflow-hidden rounded-md">
      <div className={classNames} style={{ gridTemplateRows: rowHeight }}>
        {useHighlighter ? (
          <SyntaxHighlighter
            language="json"
            style={atomOneDark}
            wrapLines={true}
            wrapLongLines={true}
            showLineNumbers={true}
            PreTag={PreWithRef}
          >
            {code}
          </SyntaxHighlighter>
        ) : (
          <>
            <pre
              ref={ref}
              className={"overflow-x-clip overflow-y-scroll bg-gray-800 p-2 text-gray-300"}
            >
              <span className={"text-red-500"}>
                // Too large to apply syntax highlighter and block expansion
              </span>
              <br />
              {code}
            </pre>
          </>
        )}
      </div>
      <div className="absolute top-1.5 right-5 box-content flex gap-2">
        <button
          aria-label="Copy JSON"
          onClick={() => handleCopy(code)}
          className={TOOLBAR_BUTTON_CLASS}
        >
          <CopyIcon className={"w-5"} />
        </button>
        {showExpand && !isForceExpanded && (
          <button
            aria-label={isDisplayExpanded ? "Collapse JSON" : "Expand JSON"}
            onClick={() => setIsExpanded(!isExpanded)}
            className={TOOLBAR_BUTTON_CLASS}
          >
            {isDisplayExpanded ? (
              <SquareMinusIcon className={"w-5"} />
            ) : (
              <SquarePlusIcon className={"w-5"} />
            )}
          </button>
        )}
        {additionalActions?.map((action) => (
          <button
            aria-label={action.label}
            key={action.label}
            type={"button"}
            onClick={action.onPress}
            className={TOOLBAR_BUTTON_CLASS}
          >
            <action.Icon className={"w-5"} />
          </button>
        ))}
      </div>
    </div>
  );
};
const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast.success("Copied to clipboard");
  });
};
