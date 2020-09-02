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
              <li tw="not-last-of-type:mb-5">
                <div tw="flex">
                  <div>
                    <h5 tw="text-lg leading-6 font-medium text-purple-900">
                      Loaded with Gatsby features
                    </h5>
                    <p tw="mt-2 text-base leading-6 text-purple-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              </li>
              <li tw="not-last-of-type:mb-5">
                <div tw="flex">
                  <div>
                    <h5 tw="text-lg leading-6 font-medium text-purple-900">
                      Loaded with Gatsby features
                    </h5>
                    <p tw="mt-2 text-base leading-6 text-purple-500">
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
                More Stuff
              </h4>
              <p tw="mt-3 text-lg leading-7 text-purple-500">Doing it</p>
              <ul tw="mt-10">
                <li tw="not-last-of-type:mb-5">
                  <div tw="flex">
                    <div>
                      <h5 tw="text-lg leading-6 font-medium text-purple-900">
                        Point One
                      </h5>
                      <p tw="mt-2 text-base leading-6 text-purple-500">
                        Some text
                      </p>
                    </div>
                  </div>
                </li>
                <li tw="not-last-of-type:mb-5">
                  <div tw="flex">
                    <div>
                      <h5 tw="text-lg leading-6 font-medium text-purple-900">
                        point two
                      </h5>
                      <p tw="mt-2 text-base leading-6 text-purple-500">
                        some text
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
