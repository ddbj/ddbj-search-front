import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon, LanguageIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";
import { Fragment, useState } from "react";
import { FC } from "react";
import { LocaleKey } from "@/types.ts";

type Props = {
  onChangeLocale: (lang: LocaleKey) => void;
  defaultLocale: LocaleKey;
};
type LocaleSelectLabel = { key: LocaleKey; label: string };
const locales: LocaleSelectLabel[] = [
  { key: "ja", label: "日本語" },
  { key: "en", label: "English" },
];

export const LocaleSwitcher: FC<Props> = ({ onChangeLocale, defaultLocale = "ja" }) => {
  const [selected, setSelected] = useState<LocaleSelectLabel>(
    locales.find((l) => l.key === defaultLocale ?? locales[0].key) ?? locales[0]
  );
  const onChangeSelect = (e: LocaleSelectLabel) => {
    setSelected(e);
    onChangeLocale(e.key);
  };
  return (
    <div className="flex w-full justify-end p-2">
      <Listbox value={selected} onChange={onChangeSelect}>
        {({ open }) => (
          <>
            <div className="relative w-36">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <span className="inline-block h-5 w-5 flex-shrink-0">
                    <LanguageIcon />
                  </span>
                  <span className="ml-3 block truncate">{selected.label}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {locales.map((lang) => (
                    <Listbox.Option
                      key={lang.key}
                      className={({ active }) =>
                        clsx(
                          active ? "bg-primary text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={lang}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span className={clsx("font-normal", "ml-3 block truncate")}>
                              {lang.label}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={clsx(
                                active ? "text-white" : "text-primary",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};
