import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layouts/AppLayout";
import Seo from "../components/Seo";

import paperIcon from "../images/paper.png";
import plasticIcon from "../images/plastics.png";
import glassIcon from "../images/glass.png";
import metalIcon from "../images/aluminium-can.png";
import electronicIcon from "../images/cell-phone.jpg";
import batteryIcon from "../images/car-battery-icon.jpg";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Better Recycle Info Hub" />
      <div className="grid grid-cols-3 gap-4 mx-auto justify-center w-1/2">
        <Link to="/">
          <div className="text-center">
            <img src={paperIcon} className="w-48 mx-auto group-hover:scale-125" />
            Paper
          </div>
        </Link>
        <Link to="/">
          <div className="text-center">
            <img src={plasticIcon} className="w-48 mx-auto group-hover:scale-125" />
            Plastics
          </div>
        </Link>
        <Link to="/">
          <div className="text-center">
            <img src={glassIcon} className="w-48 mx-auto group-hover:scale-125" />
            Glass
          </div>
        </Link>
        <Link to="/">
          <div className="text-center">
            <img src={metalIcon} className="w-48 mx-auto group-hover:scale-125" />
            Metal
          </div>
        </Link>
        <Link to="/">
          <div className="text-center">
            <img src={electronicIcon} className="w-48 mx-auto group-hover:scale-125" />
            Electronics
          </div>
        </Link>
        <Link to="/">
          <div className="text-center">
            <img src={batteryIcon} className="w-48 mx-auto group-hover:scale-125" />
            Battery
          </div>
        </Link>
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
