import { Select, type Selection, SelectItem, type SharedSelection } from "@heroui/react";
import clsx from "clsx";
import { type FC, type FormEvent, useRef, useState } from "react";
import { dbLabels, type DBType } from "@/consts/db.ts";
import { MagnifierIcon } from "@/features/graphics/MagnifierIcon.tsx";

const allLabel = "From all Data Type";
const allKey = "all";
type AllKey = typeof allKey;
type DBTypeKeyWithAll = DBType | AllKey;

const wrapperClasses = clsx("flex h-fit items-stretch", "");

const inputClasses = clsx(
  "block w-full border-y-1 border-gray-200 px-4 py-2.5 text-sm",
  "focus:outline-2 focus:-outline-offset-2 focus:outline-fire-bush-600"
);

const selectWrapperClasses = clsx("w-64 flex-shrink-0 flex-grow-0");

const selectTriggerClasses = clsx(
  "rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg",
  ""
);

const buttonClasses = clsx(
  "flex w-16 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-tr-lg rounded-br-lg bg-fire-bush"
);

//

type Props = {
  onSearch?: (types: DBType[], keywords: string[]) => void;
};

const defaultOnSearch = (types: DBType[], keywords: string[]) => {
  console.log("Search:", { types, keywords });
};

export const SearchBox: FC<Props> = ({ onSearch = defaultOnSearch }) => {
  const [values, setValues] = useState<Selection>(new Set([]));
  const inputRef = useRef<HTMLInputElement>(null);

  const onSelectionChange = (selection: SharedSelection) => {
    if (!(selection instanceof Set)) {
      setValues(selection);
      return;
    }
    const hasAll = selection.has("all");
    const isClickedAll = selection.currentKey === "all";
    if (hasAll) {
      if (isClickedAll) {
        setValues(new Set(["all"]));
      } else {
        setValues(new Set([...selection].filter((v) => v !== "all")));
      }
    } else {
      setValues(selection);
    }
  };

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const searchType = compileSearchType([...values] as DBTypeKeyWithAll[]);
    const value = inputRef.current?.value ?? "";
    onSearch(
      searchType,
      value.split(",").map((str) => str.trim())
    );
  };
  return (
    <form className={wrapperClasses} onSubmit={onSubmitForm}>
      <Select
        className={selectWrapperClasses}
        classNames={{
          trigger: selectTriggerClasses,
        }}
        label="Data Source"
        placeholder="Select Database"
        selectedKeys={values}
        selectionMode="multiple"
        onSelectionChange={onSelectionChange}
      >
        {[[allKey, allLabel], ...Object.entries(dbLabels)].map(([key, label]) => (
          <SelectItem key={key}>{label}</SelectItem>
        ))}
      </Select>
      <input
        name="query"
        type="text"
        ref={inputRef}
        className={inputClasses}
        placeholder="Enter your query or leave blank to browse all data"
        data-testid={"queryInput"}
      />
      <button className={buttonClasses} id={"searchButton"} type={"submit"}>
        <MagnifierIcon className={"h-7 fill-white"} />
      </button>
    </form>
  );
};

export const compileSearchType = (values: DBTypeKeyWithAll[]): DBType[] => {
  return values.filter((v) => v !== "all");
};
