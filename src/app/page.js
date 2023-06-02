"use client";

import Image from "next/image";
import addData from "@/firebase/firestore/addData";
import getData from "@/firebase/firestore/getData";
import deleteData from "@/firebase/firestore/deleteData";
import useSWR from "swr";
import { useAuthContext } from "@/context/AuthContext";
import circle from "../components/circle.js";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => JSON.parse(res));

export default function Home() {
  const { data, error } = useSWR("/api/first-route", fetcher);
  const result = getData("personalized_quotes", "user-id");
  const { user } = useAuthContext();
  const logged = true;

  //const result = getData('personalized_quotes', 'user-id')
  //console.log(result.data)

  const upload_data = {
    name: "John snow",
    house: "Stark",
  };

  const circleStyle = {
    animation: "spin-slow 1s linear infinite",
  };

  //addData('users', 'user-id', upload_data)
  //addData('personalized_quotes', 'user-id', upload_data)
  //deleteData('users', 'user-id', 'house')

  //if (!data) return <div>Loading...</div>;

  return (
    <div className="w-screen h-screen relative isolate overflow-hidden bg-gray-900 ">
      <div className="relative">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
            style={circleStyle}
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto w-1/2 max-w-md text-center pt-20">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-9xl">
          Irrigate
        </h2>
        {logged ? (
          <p className="mt-6 text-lg leading-8 text-gray-300">
            How many quotes would you like to generate?
          </p>
        ) : (
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We help you with your rivers
          </p>
        )}

        {logged ? (
          <div className="mt-10 flex items-center justify-center gap-x-6">
                    <div>
            <input type="number" min={1} max={20} defaultValue={1} id="visitors" class="bg-gray-50 border py-[0.6rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number" required />
        </div>
            

            
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-[0.6rem] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Generate
              </button>
            
          </div>
        ) : (
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
