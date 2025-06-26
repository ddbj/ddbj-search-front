import { Select, type Selection, SelectItem, type SharedSelection } from "@heroui/react";
import clsx from "clsx";
import { type FC, useState } from "react";

const dbSet: [string, string][] = [
  ["biosample", "BioSample"],
  ["bioproject", "BioProject"],
  ["sra-run", "SRA Run"],
  ["sra-experiment", "SRA Experiment"],
  ["sra-sample", "SRA Sample"],
  ["sra-analysis", "SRA Analysis"],
  ["sra-submission", "SRA Submission"],
  ["sra-study", "SRA Study"],
  ["jga-dataset", "JGA Dataset"],
  ["jga-study", "JGA Study"],
  ["jga-policy", "JGA Policy"],
  ["jga-dac", "JGA DAC"],
];

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

export const Search: FC = () => {
  const [values, setValues] = useState<Selection>(new Set([]));

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
  return (
    <div className={wrapperClasses}>
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
        {[["all", "From all Data Type"], ...dbSet].map(([key, label]) => (
          <SelectItem key={key}>{label}</SelectItem>
        ))}
      </Select>
      <input
        name="query"
        type="text"
        className={inputClasses}
        placeholder="Enter your query or leave blank to browse all data"
      />
      <button className={buttonClasses}>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8047 18.9453C20.0391 19.1797 20.0391 19.6094 19.8047 19.8438C19.6875 19.9609 19.5312 20 19.375 20C19.1797 20 19.0234 19.9609 18.8672 19.8438L13.3594 14.2969C11.9141 15.5469 10.0781 16.25 8.08594 16.25C3.63281 16.25 0 12.6172 0 8.125C0 3.67188 3.59375 0 8.08594 0C12.5391 0 16.2109 3.67188 16.2109 8.125C16.2109 10.1562 15.5078 11.9922 14.2578 13.4375L19.8047 18.9453ZM8.125 15C11.9141 15 15 11.9531 15 8.125C15 4.33594 11.9141 1.25 8.125 1.25C4.29688 1.25 1.25 4.33594 1.25 8.125C1.25 11.9141 4.29688 15 8.125 15Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};
