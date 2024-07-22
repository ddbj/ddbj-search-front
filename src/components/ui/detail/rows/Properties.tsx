import { clsx } from "clsx";
import React, { FC, useEffect, useRef, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
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

export const PrettyJSON: FC<{ code: string }> = ({ code }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpand, setShowExpand] = useState(false);
  const [rowHeight, setRowHeight] = useState("10rem");
  const classNames = clsx("relative grid w-full overflow-hidden transition-all duration-500");
  const ref = useRef(null);
  const PreWithRef: FC = (preProps) => <pre {...preProps} ref={ref} />;
  useEffect(() => {
    if (!ref.current) return;
    const { scrollHeight, clientHeight } = ref.current;
    if (scrollHeight > clientHeight) setShowExpand(true);
  }, [ref]);
  useEffect(() => {
    if (!ref.current) return;
    const { scrollHeight } = ref.current;
    if (isExpanded) {
      setRowHeight(`${scrollHeight}px`);
    } else {
      setRowHeight("10rem");
    }
  }, [ref, isExpanded]);
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
      {showExpand && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-5 top-1.5 box-content flex h-fit w-fit rounded-sm bg-white fill-gray-800 p-0.5 align-middle"
        >
          {isExpanded ? (
            <SquareMinusIcon className={"w-4"} />
          ) : (
            <SquarePlusIcon className={"w-4"} />
          )}
        </button>
      )}
    </div>
  );
};
