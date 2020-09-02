import React, { useState } from "react";
import tw, { styled } from "twin.macro";
// import { Transition } from "@tailwindui/react";

import NavBarLink from "~/components/Header/NavBarLink";
import Hamburger from "./Hamburger";
import LogoLink from "./LogoLink";

const NavBar = styled.nav`
  ${tw`bg-purple-400`}
`;

interface MobileLinkProps {
  isOpen: boolean;
}

const MobileLink = styled.nav<MobileLinkProps>`
  ${({ isOpen }) => (isOpen ? tw`md:block lg:hidden` : tw`hidden md:hidden`)}
`;

const MainNav = [
  // {
  //   children: "Home",
  //   key: "Landing",
  //   to: "/",
  // },
  {
    children: "Page Two",
    key: "Page Two",
    to: "/page-2",
  },
  {
    children: "404 Page",
    key: "404",
    to: "/404",
  },
];
const logo = (
  <LogoLink to="/">
    The Best <span tw="text-purple-800">Starter Kit</span>
  </LogoLink>
);

const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // const toggleOpen = () => setIsOpen(!isOpen);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  return (
    <NavBar>
      <div tw="container sm:px-6 lg:px-8">
        <div tw="flex justify-between h-16">
          <div tw="flex justify-between flex-grow">
            <Hamburger onClick={toggleMobile} isOpen={isMobileOpen} />
            <div tw="flex-shrink-0 flex items-center">
              <div tw="block lg:hidden h-8 w-auto">{logo}</div>
              <div tw="h-8 w-auto flex items-center hidden lg:block">
                {logo}
              </div>
            </div>
            <div tw="hidden md:ml-6 md:flex md:items-center space-x-4">
              {MainNav.map((item) => {
                return (
                  <NavBarLink key={item.key} to={item.to}>
                    {item.children}
                  </NavBarLink>
                );
              })}
            </div>
          </div>
          <div tw="flex items-center">
            {/* <div tw="flex-shrink-0">
              <span tw="rounded-md shadow-sm">
                <button
                  type="button"
                  tw="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:shadow-outline focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out"
                >
                  <svg
                    tw="-ml-1 mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Action</span>
                </button>
              </span>
            </div> */}
            {/* <div tw="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center"> */}
            {/* <button
                tw="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-300 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                aria-label="Notifications"
              >
                <svg
                  tw="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button> */}

            {/* <!-- Profile dropdown --> */}
            {/* <div tw="ml-3 relative">
                 <div>
                  <button
                    onClick={toggleOpen}
                    tw="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      tw="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                 <Transition
                  show={isOpen}
                  enter="transform transition ease-out duration-200"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transform transition ease-in duration-75"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {(ref) => (
                    <div
                      ref={ref}
                      tw="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                    >
                      <div
                        tw="py-1 rounded-md bg-white shadow-xs"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <Link
                          href="/"
                          tw="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Stuff
                        </Link>
                        <Link
                          href="/"
                          tw="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Settings
                        </Link>
                        <Link
                          href="/"
                          tw="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Sign out
                        </Link>
                      </div>
                    </div>
                  )}
                </Transition>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <MobileLink isOpen={isMobileOpen}>
        <div tw="px-2 pt-2 pb-3 sm:px-3">
          {MainNav.map((item) => {
            return (
              <NavBarLink key={item.key} to={item.to} isMobile>
                {item.children}
              </NavBarLink>
            );
          })}
          {/* <a
            href="#"
            tw="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Dashboard
          </a>
          <a
            href="#"
            tw="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Team
          </a>
          <a
            href="#"
            tw="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#"
            tw="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Calendar
          </a> */}
        </div>
        {/* <div tw="pt-4 pb-3 border-t border-gray-700">
          <div tw="flex items-center px-5 sm:px-6">
            <div tw="flex-shrink-0">
              <img
                tw="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div tw="ml-3">
              <div tw="text-base font-medium leading-6 text-white">
                Tom Cook
              </div>
              <div tw="text-sm font-medium leading-5 text-gray-400">
                tom@example.com
              </div>
            </div>
          </div>
          <div tw="mt-3 px-2 sm:px-3">
            <a
              href="#"
              tw="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Your Profile
            </a>
            <a
              href="#"
              tw="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Settings
            </a>
            <a
              href="#"
              tw="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Sign out
            </a>
          </div>
        </div> */}
      </MobileLink>
    </NavBar>
  );
};

export default Header;
