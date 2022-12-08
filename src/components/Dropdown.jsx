import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid/index.js";
import { classNames } from "../helpers/classNames";

export default function Dropdown({ value, items }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-400" : "text-gray-900",
              "group inline-flex items-center justify-center rounded-md bg-white text-base font-medium hover:text-gray-400 focus:outline-none"
            )}
          >
            <span>{value}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-400" : "text-gray-900",
                "ml-0 h-5 w-5 group-hover:text-gray-400"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {items.map((item) => {
                    return (
                      <a
                        key={item.title}
                        href={item.url}
                        className="-m-3 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                      >
                        <img
                          src={`/icons/${item.icon}.svg`}
                          alt={item.title}
                          className="h-8 w-8 flex-shrink-0 "
                          aria-hidden="true"
                        />

                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">fdsa</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
