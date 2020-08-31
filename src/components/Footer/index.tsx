import React from "react";
import "twin.macro";

const Footer: React.FC = ({ children }) => {
  return (
    <footer>
      {children && <div tw="container pt-10 pb-6">{children}</div>}
      <div tw="container pt-10 pb-6">
        <div tw="flex flex-wrap">
          <div tw="w-full md:w-1/4 text-center md:text-left">
            <h5 tw="uppercase mb-6 font-bold">Links</h5>
            <ul tw="mb-4">
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  FAQ
                </a>
              </li>
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Help
                </a>
              </li>
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div tw="w-full md:w-1/4 text-center md:text-left">
            <h5 tw="uppercase mb-6 font-bold">Legal</h5>
            <ul tw="mb-4">
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Terms
                </a>
              </li>
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div tw="w-full md:w-1/4 text-center md:text-left">
            <h5 tw="uppercase mb-6 font-bold">Social</h5>
            <ul tw="mb-4">
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Facebook
                </a>
              </li>
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Linkedin
                </a>
              </li>
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div tw="w-full md:w-1/4 text-center md:text-left">
            <h5 tw="uppercase mb-6 font-bold">Company</h5>
            <ul tw="mb-4">
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Official Blog
                </a>
              </li>
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  About Us
                </a>
              </li>
              <li tw="mt-2">
                <a
                  href="#"
                  tw="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
