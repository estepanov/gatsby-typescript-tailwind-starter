import React from "react";
import tw, { styled } from "twin.macro";

interface HamburgerProps {
  onClick: () => void;
  isOpen: boolean;
}

const StyledButton = styled.button`
  ${tw`inline-flex items-center justify-center p-2 rounded-md text-purple-800 hover:text-white hover:bg-purple-700 focus:outline-none focus:bg-purple-800 focus:text-white transition duration-150 ease-in-out`}
`;

const Hamburger: React.FC<HamburgerProps> = ({ onClick, isOpen }) => {
  return (
    <div tw="-ml-2 mr-2 flex items-center md:hidden">
      <StyledButton
        onClick={onClick}
        tw=""
        aria-label="Main menu"
        aria-expanded="false"
      >
        {!isOpen ? (
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </StyledButton>
    </div>
  );
};

export default Hamburger;
