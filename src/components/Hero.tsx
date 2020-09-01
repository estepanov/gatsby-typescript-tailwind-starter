import React from "react";
import tw, { styled } from "twin.macro";

const Container = styled.div`
  /* background-color: ${theme`colors.purple.400`}; */
  ${tw`py-20 bg-gradient-b-purple`}
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <div css={tw`container`}>
        <h2 tw="text-4xl font-bold mb-2 text-white">
          Tailwind CSS&nbsp;
          <br tw="xl:hidden" />
          <span tw="text-purple-800">with emotion CSS-in-JS!</span>
        </h2>
        <h3 tw="text-2xl mb-8 text-purple-200">
          Now inside of a Gatsby TypeScript Project.
        </h3>
        <a
          href="https://github.com/estepanov/gatsby-typescript-tailwind-starter"
          tw="bg-gradient-b-light-gray shadow-lg font-bold text-purple-600 rounded-full py-4 px-8 uppercase tracking-wider hover:shadow-sm hover:text-purple-100 hover:bg-gradient-t-purple-dark outline-none focus:shadow-sm focus:text-purple-100 focus:bg-gradient-t-purple-dark transition duration-500 ease-in-out"
        >
          Star on GitHub
        </a>
      </div>
    </Container>
  );
};

export default Hero;
