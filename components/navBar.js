import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const NavBar = () => {
  return (
    <Popover className="fixed inset-0 z-20 bg-white flex justify-between items-center px-6 py-2 md:h-24 h-10">
      <Link
        href="#home"
        className="lg:text-2xl font-bold cursor-pointer text-black"
      >
        Lukman
      </Link>

      <div className="grow-1 hidden md:block">
        <div className="md:flex items-center justify-center text-black gap-4 cursor-pointer font-medium ">
          <Link
            href="#home"
            className="hover:text-blue-300 hover:shadow-[0_0_3px_purple]  transition-all duration-300 hover:p-2 hover:rounded-md"
          >
            Home
          </Link>

          <Link
            href="#about-section"
            className="hover:text-blue-300 hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
          >
            About
          </Link>

          <Link
            href="#tech-section"
            className="hover:text-blue-300 hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
          >
            Technologies
          </Link>

          <Link
            href="#service-section"
            className="hover:text-blue-300 hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
          >
            Services
          </Link>

          <Link
            href="#projects-section"
            className="hover:text-blue-300 hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex gap-2 text-2xl">
        <Link href="https://www.linkedin.com/in/abdulrauf-lukman-761095217/">
          <AiFillLinkedin />
        </Link>
        <Link href="https://github.com/Lukman10a">
          <AiFillGithub />
        </Link>
      </div>

      <div className="flex items-center justify-end md:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-500 hover:bg-slate-500 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700">
          <span className="sr-only">open</span>
          <Bars3Icon className="h-6 w-6* aria-hidden:true" />
        </Popover.Button>
      </div>
      <Popover.Overlay className="lg:hidden fixed inset-0 bg-black opacity-20" />
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Link href="#home" className="text-2xl font-bold">
                  Lukman
                </Link>
                <div className="-mr-1">
                  <Popover.Button className="inline-flex items-center justify-center p-2 bg-white rounded-md text-gray-600 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-600">
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6* aria-hidden:true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6*">
                <nav className="grid gap-y-6 py-2">
                  <Link
                    href="#home"
                    className="hover:text-blue-500 hover:text-center hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
                  >
                    Home
                  </Link>

                  <Link
                    href="#about-section"
                    className="hover:text-blue-500 hover:text-center hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
                  >
                    About
                  </Link>

                  <Link
                    href="#tech-section"
                    className="hover:text-blue-300 hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
                  >
                    Technologies
                  </Link>

                  <Link
                    href="#portfolio-section"
                    className="hover:text-blue-500 hover:text-center hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
                  >
                    Projects
                  </Link>

                  <Link
                    href="#service-section"
                    className="hover:text-blue-500 hover:text-center hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
                  >
                    Services
                  </Link>

                  <Link
                    href="#contact-section"
                    className="hover:text-blue-500 hover:text-center hover:shadow-[0_0_3px_purple] transition-all duration-300 hover:p-2 hover:rounded-md"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NavBar;
