import * as React from "react";
import { graphql } from "gatsby";

// Import Swiper React components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Layout from "../components/layouts/AppLayout";
import Seo from "../components/Seo";
import CardIframe from "../components/CardIframe";
import LinkImage from "../components/LinkImage";

import paperImage from "../images/paper.png";
import plasticImage from "../images/plastics.png";
import glassImage from "../images/glass.png";
import metalImage from "../images/aluminium-can.png";
import electronicImage from "../images/cell-phone.jpg";
import batteryImage from "../images/car-battery-icon.jpg";

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
        <LinkImage
          image={paperImage}
          title="Paper"
          to={'/'}
        />
        <LinkImage
          image={plasticImage}
          title="Plastics"
          to={'/'}
        />
        <LinkImage
          image={glassImage}
          title="Glass"
          to={'/'}
        />
        <LinkImage
          image={metalImage}
          title="Tin &amp; Metal"
          to={'/'}
        />
        <LinkImage
          image={electronicImage}
          title="Electornics"
          to={'/'}
        />
        <LinkImage
          image={batteryImage}
          title="Battery"
          to={'/'}
        />
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
