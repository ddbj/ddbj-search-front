import { clsx } from "clsx";
import React, { FC, useState } from "react";
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

const PrettyJSON: FC<{ code: string }> = ({ code }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const classNames = clsx(
    "relative w-full overflow-auto transition-all duration-300",
    isExpanded ? ["max-h-128 min-h-8"] : "max-h-24"
  );
  return (
    <div className="relative overflow-hidden">
      <div className={classNames}>
        <SyntaxHighlighter
          language="json"
          style={atomOneDark}
          wrapLines={true}
          wrapLongLines={true}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-5 top-1.5 box-content flex h-fit w-fit rounded-sm bg-white fill-gray-800 p-0.5 align-middle"
      >
        {isExpanded ? <SquareMinusIcon className={"w-4"} /> : <SquarePlusIcon className={"w-4"} />}
      </button>
    </div>
  );
};
