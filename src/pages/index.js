import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layouts/AppLayout";
import Seo from "../components/Seo";
import LinkImage from "../components/LinkImage";
// eslint-disable-next-line no-unused-vars
import ButtonRunBatch from "../components/ButtonRunBatch";

import paperImage from "../images/paper.png";
import plasticImage from "../images/plastics.png";
import glassImage from "../images/glass.png";
import metalImage from "../images/aluminium-can.png";
import electronicImage from "../images/cell-phone.jpg";
import batteryImage from "../images/car-battery-icon.jpg";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Better Recycle Info Hub" />
      {/* 
      Uncomment to use - 27/02/2022 Darky
      <div className="w-1/2 mx-auto">
        <ButtonRunBatch />
      </div> 
      */}
      <div className="grid grid-cols-3 gap-4 mx-auto justify-center w-1/2">
        <LinkImage image={paperImage} title="Paper" to={"/"} />
        <LinkImage image={plasticImage} title="Plastics" to={"/"} />
        <LinkImage image={glassImage} title="Glass" to={"/"} />
        <LinkImage image={metalImage} title="Tin &amp; Metal" to={"/"} />
        <LinkImage image={electronicImage} title="Electronics" to={"/"} />
        <LinkImage image={batteryImage} title="Battery" to={"/"} />
      </div>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
