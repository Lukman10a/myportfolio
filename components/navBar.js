import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

const NavBar = () => {
  return (
    <Popover className="fixed inset-0 z-20 border-b-2 bg-slate-400 container mx-auto flex justify-between items-center lg:gap-20 px-6 py-2 h-24 ">
      <div className="text-2xl font-bold cursor-pointer text-white">Lukman</div>
      <div>social media</div>
      <div className="grow-1">
        <div className="hidden lg:flex items-center justify-center gap-2 cursor-pointer">
          <Link href="/home" className="hover:text-blue-300">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-300">
            About
          </Link>

          <Link href="/portfolio" className="hover:text-blue-300">
            Portfolio
          </Link>

          <Link href="/services" className="hover:text-blue-300">
            Services
          </Link>

          <Link href="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end lg:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-500 hover:bg-slate-500 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700">
          <span className="sr-only">open</span>
          <Bars3Icon className="h-6 w-6* aria-hidden:true" />
        </Popover.Button>
      </div>
      <Popover.Overlay className="lg:hidden fixed inset-0 bg-black opacity-20" />
      {/* <Transition
        a6={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      > */}
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
      >
        <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Lukman</h1>
              <div className="-mr-1">
                <Popover.Button className="inline-flex items-center justify-center p-2 bg-white rounded-md text-gray-600 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-600">
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6* aria-hidden:true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6*">
              <nav className="grid gap-y-8">
                <Link href="/home" className="hover:text-blue-300">
                  Home
                </Link>

                <Link href="/about" className="hover:text-blue-300">
                  About
                </Link>

                <Link href="/portfolio" className="hover:text-blue-300">
                  Portfolio
                </Link>

                <Link href="/services" className="hover:text-blue-300">
                  Services
                </Link>

                <Link href="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
      {/* </Transition> */}
    </Popover>
  );
};

export default NavBar;
