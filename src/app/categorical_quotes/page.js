"use client";

import Image from "next/image";
import addData from "@/firebase/firestore/addData";
import useSWR from "swr";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => JSON.parse(res));

export default function Home() {
  const { data, error } = useSWR("/api/quotes", fetcher);
  const [open, setOpen] = useState(true);
  const logged = true;

  if (!data) return <div>Loading...</div>;

  //search function
  var searchResults = [];
  var searchField = "topic";
  var searchVal = "anger";
  for (var i = 0; i < data.length; i++) {
    if (data[i][searchField] == searchVal) {
      searchResults.push(data[i]);
    }
  }

  //randomizer
  var randomizerResults = [];
  var chosenNumbers = [];
  var randNum = 0;

  var num_quotes = 10;

  for (var i = 0; i < num_quotes; i++) {
    randNum = Math.round(Math.random() * data.length);
    if (chosenNumbers.includes(randNum)) {
      i += 1;
    } else {
      randomizerResults.push(data[randNum + i]);
    }
  }

  //console.log(results)
  return (
    <div>
      <div className="text-center">
        <p className="mt-6 text-lg leading-8 text-gray-600">
          How many quotes would you like to generate?
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div>
            <input
              type="number"
              min={1}
              max={20}
              defaultValue={1}
              id="visitors"
              class="bg-gray-50 border py-[0.6rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-[0.6rem] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Generate
          </button>

        </div>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {randomizerResults.map((quotes) => (
          <figure class="max-w-screen-md mx-auto text-center">
            <blockquote>
              <p className="mt-6 text-lg leading-8 text-gray-500">
                {quotes.Quote}
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-5 space-x-3">
              <div class="flex items-center">
                <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                  {quotes.Author}
                </cite>

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button>
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Add to river
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Add to well
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Report
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </figcaption>
          </figure>
        ))}
      </ul>
    </div>
  );
}

{
  /* <main className="flex min-h-screen flex-col items-center justify-between p-24">

<li>Name: {randomizerResults[0].Author}</li>
<li>Quote: {randomizerResults[0].Quote}</li>

</main> */
}
