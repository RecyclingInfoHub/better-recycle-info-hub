import React from "react";

// Import Swiper React components
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Layout from "../components/layouts/AppLayout";
import CardIframe from "../components/CardIframe";

import bulbImage from "../images/bulb.jpg";

const Video = ({ location }) => {
  const videoList1 = [
    {
      cardTitle: 'Singapore Recycling System',
      embedUrl: 'https://www.youtube.com/embed/r-q5V6LDxEY',
    },
    {
      cardTitle: 'US Glass Recycling',
      embedUrl: 'https://www.youtube.com/embed/LR9FtWVjk2c',
    },
    {
      cardTitle: 'Zero Waste Shopping Ideas',
      embedUrl: 'https://www.youtube.com/embed/M7ikhWfHQc8',
    },
    {
      cardTitle: 'LifeStory - Grocery String Bags',
      embedUrl: 'https://www.youtube.com/embed/aA0O9PBZ2H8',
    }
  ];
  // const videoList2 = [];

  return (
    <Layout location={location}>
      <img src={bulbImage} className="w-screen max-w-none h-96 -mx-2 object-cover" />
      <div className="mx-auto mt-12">
        <h1 className="text-2xl text-center font-bold my-6">What is happening in the world of recycling?</h1>
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
          {/* <SwiperSlide>
            <div className="grid grid-cols-4 gap-8 w-5/6 mx-auto">
              {videoList2.map(({ cardTitle, embedUrl }, index) => (
                <CardIframe
                  key={index}
                  cardTitle={cardTitle}
                  embedUrl={embedUrl}
                ></CardIframe>
              ))}
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </Layout>
  )
};

export default Video;