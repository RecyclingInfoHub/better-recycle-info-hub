import * as React from "react";
import { Link, graphql } from "gatsby";

// Import Swiper React components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Layout from "../components/layouts/AppLayout";
import Seo from "../components/Seo";
import CardIframe from "../components/CardIframe";

import paperIcon from "../images/paper.png";
import plasticIcon from "../images/plastics.png";
import glassIcon from "../images/glass.png";
import metalIcon from "../images/aluminium-can.png";
import electronicIcon from "../images/cell-phone.jpg";
import batteryIcon from "../images/car-battery-icon.jpg";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const videoList1 = [];
  const videoList2 = [];

  for (let i = 0; i < 4; i++) {
    videoList1.push({
      cardTitle: 'Get better to recycle',
      embedUrl: 'https://www.youtube.com/embed/lZCXfWPtY78'
    });
    videoList2.push({
      cardTitle: 'Understand Recycle',
      embedUrl: 'https://www.youtube.com/embed/Umu-Hhv6qPA'
    });
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Better Recycle Info Hub" />
      <div className="grid grid-cols-3 gap-4 mx-auto justify-center w-1/2">
        <Link to="/">
          <div className="text-center">
            < img src={paperIcon} className="w-48 mx-auto my-4 transform hover:scale-110 transition duration-300" />
            Paper
          </div>
        </Link>
        <Link to="/">
          <div className="text-center">
            <img src={plasticIcon} className="w-48 mx-auto my-4 transform hover:scale-110 transition duration-300" />
            Plastics
          </div>
        </Link>
        <Link to="/">
          <div className="text-center">
            <img src={glassIcon} className="w-48 mx-auto my-4 transform hover:scale-110 transition duration-300" />
            Glass
          </div>
        </Link>
        <Link to="/">
          <div className="text-center">
            <img src={metalIcon} className="w-48 mx-auto my-4 transform hover:scale-110 transition duration-300" />
            Tin &amp; Metal
          </div>
        </Link>
        <Link to="/">
          <div className="text-center ">
            <img src={electronicIcon} className="w-48 mx-auto my-4 transform hover:scale-110 transition duration-300" />
            Electronics
          </div>
        </Link>
        <Link to="/">
          <div className="text-center">
            <img src={batteryIcon} className="w-48 mx-auto my-4 transform hover:scale-110 transition duration-300" />
            Battery
          </div>
        </Link>
      </div>
      <div className="mx-auto mt-24">
        <h1 className="text-2xl text-center font-bold">Sample Video Carousel</h1>
        <Swiper modules={[Navigation]} loop navigation className="w-3/4">
          <SwiperSlide>
            <div className="grid grid-cols-4 gap-8 w-5/6 mx-auto">
              {videoList1.map(({ cardTitle, embedUrl }, index) => (
                <CardIframe
                  key={index}
                  cardTitle={cardTitle}
                  embedUrl={embedUrl}
                ></CardIframe>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-4 gap-8 w-5/6 mx-auto">
              {videoList2.map(({ cardTitle, embedUrl }, index) => (
                <CardIframe
                  key={index}
                  cardTitle={cardTitle}
                  embedUrl={embedUrl}
                ></CardIframe>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
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
