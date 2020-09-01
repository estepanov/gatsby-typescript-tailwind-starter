import React from "react";
import "twin.macro";
import GatsbyLogo from "~/images/gatsby-icon.png";

const Features: React.FC = () => {
  return (
    <div tw="py-24 bg-purple-200 overflow-hidden lg:py-32">
      <div tw="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div tw="relative">
          <h3 tw="text-center text-3xl leading-8 font-extrabold tracking-tight text-purple-900 sm:text-4xl sm:leading-10">
            &quot;Could be the best Gatsby starter kit ever made&quot;
          </h3>
          <p tw="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-purple-500">
            Okay, it is probably not the best but its pretty damn decent. Look
            at all this stuff it does!
          </p>
        </div>

        <div tw="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div tw="relative">
            <h4 tw="text-2xl leading-8 font-extrabold text-purple-900 tracking-tight sm:text-3xl sm:leading-9">
              Loaded with Gatsby
            </h4>
            <p tw="mt-3 text-base leading-7 text-purple-600">
              Tons of features and plugins already configured and ready for you
              to customize!
            </p>

            <ul tw="mt-10">
              <li>
                <div tw="flex">
                  <div>
                    <h5 tw="text-lg leading-6 font-medium text-purple-900">
                      Loaded with Gatsby features
                    </h5>
                    <p tw="mt-2 text-base leading-6 text-purple-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div tw="mt-10 -mx-4 relative lg:mt-0">
            <img tw="relative mx-auto" width="200" src={GatsbyLogo} alt="" />
          </div>
        </div>

        <div tw="relative mt-12 sm:mt-16 lg:mt-24">
          <div tw="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div tw="lg:col-start-2">
              <h4 tw="text-2xl leading-8 font-extrabold text-purple-900 tracking-tight sm:text-3xl sm:leading-9">
                Always in the loop
              </h4>
              <p tw="mt-3 text-lg leading-7 text-purple-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p>

              <ul tw="mt-10">
                <li>
                  <div tw="flex">
                    <div tw="flex-shrink-0">
                      <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-white text-purple-500">
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
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div tw="ml-4">
                      <h5 tw="text-lg leading-6 font-medium text-purple-900">
                        Mobile notifications
                      </h5>
                      <p tw="mt-2 text-base leading-6 text-purple-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div tw="flex">
                    <div tw="flex-shrink-0">
                      <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-white text-purple-500">
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div tw="ml-4">
                      <h5 tw="text-lg leading-6 font-medium text-purple-900">
                        Reminder emails
                      </h5>
                      <p tw="mt-2 text-base leading-6 text-purple-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* <div tw="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <img
                tw="relative mx-auto"
                width="490"
                src="https://tailwindui.com/img/features/feature-example-2.png"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
