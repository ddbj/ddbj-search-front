import { ListBox, Select } from "@heroui/react";
import clsx from "clsx";
import { type FC, type FormEvent, type Key, useRef, useState } from "react";
import { dbLabels, type DBType } from "@/consts/db.ts";
import { MagnifierIcon } from "@/features/graphics/MagnifierIcon.tsx";
import { compileSearchType } from "@/features/initialSearch/searchBoxUtils.ts";

const allLabel = "From all Data Type";
const allKey = "all";

const wrapperClasses = clsx("flex h-fit items-stretch", "");

const inputClasses = clsx(
  "block w-full border-y-1 border-gray-200 bg-white px-4 py-2.5 text-sm",
  "focus:outline-2 focus:-outline-offset-2 focus:outline-fire-bush-600",
);

const selectWrapperClasses = clsx("w-64 flex-shrink-0 flex-grow-0");

const selectTriggerClasses = clsx(
  "min-h-[3.1rem] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg",
  "border border-gray-200 bg-gray-50 px-3 py-2 shadow-none",
  "focus:outline-2 focus:-outline-offset-2 focus:outline-fire-bush-600",
);

const buttonClasses = clsx(
  "flex w-16 flex-shrink-0 flex-grow-0 cursor-pointer items-center justify-center rounded-tr-lg rounded-br-lg bg-fire-bush",
);

const selectItems = [
  { id: allKey, label: allLabel },
  ...Object.entries(dbLabels).map(([id, label]) => ({ id, label })),
];

//

type Props = {
  onSearch?: (types: DBType[], keywords: string[]) => void;
};

const defaultOnSearch = (types: DBType[], keywords: string[]) => {
  console.log("Search:", { types, keywords });
};

export const SearchBox: FC<Props> = ({ onSearch = defaultOnSearch }) => {
  const [values, setValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSelectionChange = (selection: Key[]) => {
    const nextValues = selection.map((value) => String(value));
    const previouslyHadAll = values.includes(allKey);
    const nextHasAll = nextValues.includes(allKey);

    if (nextHasAll && !previouslyHadAll) {
      setValues([allKey]);
      return;
    }

    if (nextHasAll && previouslyHadAll && nextValues.length > 1) {
      setValues(nextValues.filter((value) => value !== allKey));
      return;
    }

    setValues(nextValues);
  };

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const searchType = compileSearchType([...values] as (DBType | "all")[]);
    const value = inputRef.current?.value ?? "";
    onSearch(
      searchType,
      value.split(",").map((str) => str.trim()),
    );
  };
  return (
    <form className={wrapperClasses} onSubmit={onSubmitForm}>
      <Select
        aria-label="Data Source"
        className={selectWrapperClasses}
        placeholder="Select Database"
        selectionMode="multiple"
        value={values}
        variant="secondary"
        onChange={onSelectionChange}
      >
        <Select.Trigger className={selectTriggerClasses} data-slot="trigger">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5 text-left">
            <span className="text-[10px] font-semibold text-gray-500">Data Source</span>
            <Select.Value className="w-full truncate text-sm text-gray-700" />
          </div>
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox className="max-h-80">
            {selectItems.map((item) => (
              <ListBox.Item key={item.id} id={item.id} data-key={item.id} textValue={item.label}>
                {item.label}
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
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
