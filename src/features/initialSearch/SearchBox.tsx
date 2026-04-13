import clsx from "clsx";
import { type FC, type FormEvent, useRef, useState } from "react";
import { dbLabels, type DBType } from "@/consts/db.ts";
import { MagnifierIcon } from "@/features/graphics/MagnifierIcon.tsx";
import { compileSearchType } from "@/features/initialSearch/searchBoxUtils.ts";

const allLabel = "From all Data Type";
const allKey = "all";

const wrapperClasses = clsx("flex h-fit items-stretch", "");

const inputClasses = clsx(
  "block w-full border-y-1 border-gray-200 px-4 py-2.5 text-sm",
  "focus:outline-2 focus:-outline-offset-2 focus:outline-fire-bush-600",
);

const selectWrapperClasses = clsx("w-64 flex-shrink-0 flex-grow-0");

const selectTriggerClasses = clsx(
  "rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg",
  "",
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
  const [values, setValues] = useState<Set<string>>(new Set());
  const inputRef = useRef<HTMLInputElement>(null);

  const onSelectionChange = (selectedOptions: HTMLOptionsCollection) => {
    const nextValues = new Set(
      Array.from(selectedOptions)
        .filter((option) => option.selected)
        .map((option) => option.value),
    );
    const previouslyHadAll = values.has(allKey);
    const nextHasAll = nextValues.has(allKey);

    if (nextHasAll && !previouslyHadAll) {
      setValues(new Set([allKey]));
      return;
    }

    if (nextHasAll && previouslyHadAll && nextValues.size > 1) {
      nextValues.delete(allKey);
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
      <select
        aria-label="Data Source"
        className={clsx(
          selectWrapperClasses,
          selectTriggerClasses,
          "border border-stone-300 bg-white px-3 py-2 text-sm",
        )}
        multiple
        value={[...values]}
        onChange={(event) => onSelectionChange(event.currentTarget.options)}
      >
        {selectItems.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
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
