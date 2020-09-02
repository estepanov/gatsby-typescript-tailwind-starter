import React from "react";
import tw, { styled, css } from "twin.macro";
import GatsbyLogo from "~/images/gatsby-icon.png";

const Container = styled.div`
  ${tw`md:py-10 lg:py-20 sm:py-10 py-10 bg-gradient-b-purple`}
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <div
        css={tw`container grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-8 lg:items-center`}
      >
        <div tw="flex-shrink-0">
          <a
            href="#"
            tw="outline-none inline-flex items-center text-white bg-gradient-b-purple-dark rounded-full py-1 px-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-purple-900 focus:text-purple-900 hover:bg-gradient-b-light-gray focus:bg-gradient-b-light-gray focus:shadow-outline mb-3"
          >
            <span tw="px-3 py-1/2 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-red-500 rounded-full">
              hot code
            </span>
            <span tw="ml-5 text-sm leading-5">View Source</span>
            <svg tw="ml-1 w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <h2 tw="text-4xl font-bold mb-2 text-white">
            Tailwind CSS&nbsp;
            <br tw="xl:hidden" />
            <span tw="text-purple-800">with emotion CSS-in-JS!</span>
          </h2>
          <h3 tw="text-2xl mb-8 text-purple-200">
            Now inside of a TypeScript Gatsby Project.
          </h3>
          <a
            href="https://github.com/estepanov/gatsby-typescript-tailwind-starter"
            tw="leading-10 focus:shadow-outline bg-gradient-b-light-gray shadow-lg font-bold text-purple-600 rounded-full py-4 px-8 uppercase tracking-wider hover:shadow-sm hover:text-purple-100 hover:bg-gradient-t-purple-dark outline-none focus:text-purple-100 focus:bg-gradient-t-purple-dark transition duration-500 ease-in-out"
          >
            Star on GitHub
          </a>
        </div>
        <div tw="row-start-1 md:row-start-auto pb-10 md:pb-20 lg:pb-0 flex flex-row flex-wrap items-center justify-center text-lg xl:text-4xl lg:text-3xl md:text-xl">
          <img
            tw="p-2"
            css={css`
              width: 5em;
              height: 5em;
            `}
            src={GatsbyLogo}
            alt=""
          />
          <svg
            tw="p-2"
            width="5em"
            height="5em"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Tailwind CSS</title>
            <path
              d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              transform="translate(5 16)"
              fill="url(#logoMarkGradient)"
              fillRule="evenodd"
            ></path>
            <defs>
              <linearGradient x1="0%" y1="0%" y2="100%" id="logoMarkGradient">
                <stop stopColor="#2298BD" />
                <stop offset="1" stopColor="#0ED7B5" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            tw="p-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="5em"
            height="5em"
          >
            <rect width="36" height="36" x="6" y="6" fill="#1976d2" />
            <polygon
              fill="#fff"
              points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
            />
            <path
              fill="#fff"
              d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
            />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
