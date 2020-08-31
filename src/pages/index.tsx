import React from "react";
import { Link } from "gatsby";
import tw, { styled } from "twin.macro";

// import Image from "~/components/Image";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import Hero from "~/components/Hero";

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`;
// or use the shorthand version
const Button2 = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`;

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div css={tw`container`}>
      <h1>Hi people</h1>
      <Button>Hi!</Button>
      <Button2>Hi!</Button2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to Using TypeScript</Link>
    </div>
  </Layout>
);

export default IndexPage;
