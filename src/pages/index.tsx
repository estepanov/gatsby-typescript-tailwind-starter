import React from "react";

// import Image from "~/components/Image";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import Hero from "~/components/Hero";
import Features from "~/components/Features";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
  </Layout>
);

export default IndexPage;
