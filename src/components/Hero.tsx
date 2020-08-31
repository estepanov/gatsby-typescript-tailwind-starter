import React from "react";
import tw, { styled, theme } from "twin.macro";

const Container = styled.div`
  ${tw`py-20`}
  background-color: ${theme`colors.purple.400`};
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <div css={tw`container`}>
        <h2 tw="text-4xl font-bold mb-2 text-white">
          Tailwind CSS&nbsp;
          <br tw="xl:hidden" />
          <span tw="text-purple-700">with emotion CSS-in-JS!</span>
        </h2>
        <h3 tw="text-2xl mb-8 text-purple-200">
          Now inside of a Gatsby TypeScript Project.
        </h3>
        <button tw="bg-white font-bold text-purple-600 rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:shadow-sm hover:text-purple-100 hover:bg-purple-600 focus:outline-none focus:shadow-sm focus:text-purple-100 focus:bg-purple-800 transition duration-500 ease-in-out">
          Star on GitHub
        </button>
      </div>
    </Container>
  );
};

export default Hero;
