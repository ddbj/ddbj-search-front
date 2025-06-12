import clsx from "clsx";
import type { FC } from "react";

const wrapperClasses = clsx("flex h-11 items-center", "");

const inputClasses = clsx(
  "block h-full w-full border-1 border-gray-200 px-4 py-2.5 text-sm",
  "focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
);

const buttonClasses = clsx(
  "flex aspect-[5/4] h-full cursor-pointer items-center justify-center rounded-tr-lg rounded-br-lg bg-amber-600"
);
const selectClasses = clsx(
  "h-full appearance-none rounded-tl-lg rounded-bl-lg bg-white py-1.5 pr-8 pl-3 text-base text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-200",
  "focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
);

//

export const Search: FC = () => {
  return (
    <div className={wrapperClasses}>
      <select id="country" name="country" autoComplete="country-name" className={selectClasses}>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
      <input
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
