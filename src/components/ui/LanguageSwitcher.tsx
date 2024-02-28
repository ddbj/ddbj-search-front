import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon, LanguageIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";
import { Fragment, useState } from "react";
import { FC } from "react";

type Props = {};
const languages: { key: string; label: string }[] = [
  { key: "ja", label: "日本語" },
  { key: "en", label: "English" },
];

export const LanguageSwitcher: FC<Props> = ({}) => {
  const [selected, setSelected] = useState(languages[0]);
  return (
    <div className="flex w-full justify-end p-2">
      <Listbox value={selected} onChange={setSelected}>
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
                  {languages.map((lang) => (
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

    // <Navbar className={""}>
    // <div className="flex-grow-1" />
    // <Dropdown isOpen={isDropdownOpen} toggle={() => setIsDropdown((isOpened) => !isOpened)}>
    // {/*<DropdownToggle color='light' caret>*/}
    // {/*  <i className="bi bi-translate me-2" />*/}
    // {/*  {router.locale === LOCALE.JA ? (*/}
    // {/*    <FormattedMessage id="language.japanese" />*/}
    // {/*  ) : (*/}
    // {/*    <FormattedMessage id="language.english" />*/}
    // {/*  )}*/}
    // {/*</DropdownToggle>*/}
    // <DropdownToggle color="light" caret>
    // <i className="bi bi-translate me-2" />
    // <FormattedMessage id="language.japanese" />
    // </DropdownToggle>
    // <DropdownMenu>
    // <DropdownItem>
    // <FormattedMessage id="language.japanese" />
    // </DropdownItem>
    // <DropdownItem>
    // <FormattedMessage id="language.english" />
    // </DropdownItem>
    // </DropdownMenu>
    // {/*<DropdownMenu>*/}
    // {/*  <DropdownItem onClick={() => router.replace(router.asPath, undefined, { locale: LOCALE.JA })} active={router.locale === LOCALE.JA}>*/}
    // {/*    <FormattedMessage id="language.japanese" />*/}
    // {/*  </DropdownItem>*/}
    // {/*  <DropdownItem onClick={() => router.replace(router.asPath, undefined, { locale: LOCALE.EN })} active={router.locale === LOCALE.EN}>*/}
    // {/*    <FormattedMessage id="language.english" />*/}
    // {/*  </DropdownItem>*/}
    // {/*</DropdownMenu>*/}
    // </Dropdown>
    // </Navbar>
  );
};
