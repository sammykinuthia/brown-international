"use client"

import { Navbar } from "flowbite-react";
import Image from "next/image";


export default function NavBar() {

  function handleClick(){
    let navClasses = document.getElementById("navbar-default")?.classList
    if(navClasses?.contains("hidden")){
        console.log("clicked");
        document.getElementById("navbar-default")?.classList.remove("hidden")
      }
      else{
        document.getElementById("navbar-default")?.classList.add("hidden")
      }
  }
  return (


    <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image height={40} width={40} alt="Master brown logo" className="mr-3 h-9 sm:h-9" src="https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854814/Brown%20master/LOGO_wipkey.png" />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Master Brown</span>
        </a>
        <button onClick={handleClick} type="button" id="toggle" className="md:hidden">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
            </li>
            <li>
              <a href="/programs" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Programs</a>
            </li>

            <li>
              <a href="/contacts" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}