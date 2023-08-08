"use client"

import { useSession, signIn, signOut } from "next-auth/react";

export default function IndexPage() {
  
  return (
    <div className="container m-5 ">
      <div className="flex min-h-screen flex-row items-center justify-center">
        <div className="justify-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Statens pensjonskasse fagdagmal
        </h1>
        <p className="mb-6 text-left text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Her kan du opprette en oversikt over talere og temaer de skal holde
        </p>
        <a href="#" onClick={() => {
              signIn();
            }} className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Logg inn her
            <svg className="ml-2 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>
      </div>
    </div>
  )
}
