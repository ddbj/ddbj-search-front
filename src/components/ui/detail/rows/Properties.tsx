import { clsx } from "clsx";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyIcon } from "@/components/icon/CopyIcon.tsx";
import { SquareMinusIcon } from "@/components/icon/SquareMinusIcon.tsx";
import { SquarePlusIcon } from "@/components/icon/SquarePlusIcon.tsx";
import { Row } from "@/components/ui/detail/rows/Shared.tsx";

type Props = {
  title: string;
  codeObj?: any;
};

export const Properties: FC<Props> = ({ title, codeObj }) => {
  if (!codeObj) return <Row dd={title} />;
  const properties = JSON.stringify(codeObj, null, 2);
  return (
    <Row dd={"properties"}>
      <PrettyJSON code={properties} />
    </Row>
  );
};

const initialHeight = "11rem";
const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    window.alert("Copied to clipboard");
  });
};

export const PrettyJSON: FC<{ code: string }> = ({ code }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpand, setShowExpand] = useState(false);
  const [rowHeight, setRowHeight] = useState(initialHeight);
  const classNames = clsx("relative grid w-full overflow-hidden transition-all duration-500");
  const ref = useRef(null);
  const PreWithRef: FC = (preProps) => (
    <pre className={"overflow-y-scroll"} {...preProps} ref={ref} />
  );
  const init = useCallback(() => {
    if (!ref.current) return;
    const { scrollHeight, clientHeight } = ref.current;
    scrollHeight > clientHeight && setShowExpand(true);
  }, []);
  const toggleExpand = useCallback(() => {
    if (!ref.current) return;
    const { scrollHeight } = ref.current;
    isExpanded ? setRowHeight(`${scrollHeight}px`) : setRowHeight(initialHeight);
  }, [isExpanded]);
  useEffect(() => {
    init();
  }, [init]);
  useEffect(() => {
    toggleExpand();
  }, [isExpanded, toggleExpand]);
  useEffect(() => {
    setIsExpanded(false);
    init();
  }, [code, init]);

  return (
    <div className="relative overflow-hidden">
      <div className={classNames} style={{ gridTemplateRows: rowHeight }}>
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
      </div>
      <div className="absolute right-5 top-1.5 box-content flex gap-2">
        <button
          onClick={() => handleCopy(code)}
          className="flex h-fit w-fit rounded-sm bg-white fill-gray-800 p-0.5 align-middle"
        >
          <CopyIcon className={"w-4"} />
        </button>
        {showExpand && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex h-fit w-fit rounded-sm bg-white fill-gray-800 p-0.5 align-middle"
          >
            {isExpanded ? (
              <SquareMinusIcon className={"w-4"} />
            ) : (
              <SquarePlusIcon className={"w-4"} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
