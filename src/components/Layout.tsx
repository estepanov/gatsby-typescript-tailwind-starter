/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { SiteTitleQuery } from "../../gatsby-graphql";
import { Global, css } from "@emotion/core";

import Header from "~/components/Header";
import tw from "twin.macro";
import Footer from "~/components/Footer";

interface LayoutProps {
  container?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, container }) => {
  // const data: SiteTitleQuery = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <Global
        styles={css`
          body {
            ${tw`bg-blue-100`}
            ${tw`h-screen`}
          }
          body > div,
          body > div > div {
            ${tw`flex flex-grow flex-col flex-shrink-0`}
            ${tw`h-full`}
          }
        `}
      />
      <Header />
      <div css={tw`flex flex-col flex-grow flex-shrink-0`}>
        {container ? <div css={tw`container py-3`}>{children}</div> : children}
      </div>
      <Footer>
        <div tw="text-center">
          © {new Date().getFullYear()}
          <br />
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <br />
          Starter kit by <a href="https://www.estep.nyc">estepanov</a>
        </div>
      </Footer>
    </>
  );
};

export default Layout;
