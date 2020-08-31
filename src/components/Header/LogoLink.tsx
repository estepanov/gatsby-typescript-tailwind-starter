import React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";

interface LogoLinkProps {
  to: string;
}

const StyledLink = styled(Link)`
  ${tw`text-white font-sans text-lg font-bold`}
`;

const LogoLink: React.FC<LogoLinkProps> = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default LogoLink;
