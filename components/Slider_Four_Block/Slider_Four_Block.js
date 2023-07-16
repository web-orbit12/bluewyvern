import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
//import styles from './Slider_Four_Block.module.css';

import { storyblokEditable } from "@storyblok/react";

SwiperCore.use([Pagination, Autoplay]); // Use Swiper's Pagination and Autoplay components

const HeroSlider = ({ blok }) => {
  // Dummy data - replace this with actual data from your Storyblok component
  const slides = [
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0730/2512/6696/files/Groupe_de_masques_135.jpg?v=1686668510",
      title: "Comment m'équiper pour le MMA?",
      videoUrl: "https://www.youtube.com/watch?v=FDmZB2d2vQg"
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0730/2512/6696/files/Groupe_de_masques_135.jpg?v=1686668510",
      title: "Comment m'équiper pour le MMA?",
      videoUrl: "https://www.youtube.com/watch?v=FDmZB2d2vQg"
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0730/2512/6696/files/Groupe_de_masques_135.jpg?v=1686668510",
      title: "Comment m'équiper pour le MMA?",
      videoUrl: "https://www.youtube.com/watch?v=FDmZB2d2vQg"
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0730/2512/6696/files/Groupe_de_masques_135.jpg?v=1686668510",
      title: "Comment m'équiper pour le MMA?",
      videoUrl: "https://www.youtube.com/watch?v=FDmZB2d2vQg"
    },
    // Add more slides here...
  ];

  return (
    <div className="page-width swiper-container" {...storyblokEditable(blok)}>
      <div className="four-blocks-container">
        <div className="titresfaq">
          <h2>Une question? Espace F.A.Q</h2>
          <a href="#" className="voirtous" rel="noopener noreferrer">Voir tout les tutos</a>
        </div>
        <Swiper
          className="swiper1"
          spaceBetween={20}
          slidesPerView={1.15}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            768: {
              slidesPerView: 2.5
            },
            1140: {
              slidesPerView: 4
            }
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <a href={slide.videoUrl} target="_blank" className="image-block" rel="noopener noreferrer">
                <span className="play-button"></span>
                <img src={slide.imageUrl} alt={slide.title} />
                <h3>{slide.title}</h3>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination b1"></div>
      </div>
    </div>
  );
}

export default HeroSlider;
