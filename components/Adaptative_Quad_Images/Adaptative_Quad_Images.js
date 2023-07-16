import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
//import styles from './Slider_Four_Block.module.css';

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

SwiperCore.use([Pagination, Autoplay]); // Use Swiper's Pagination and Autoplay components

const Adaptative_Quad_Images = ({ blok }) => {
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
    // Add more slides here...
  ];

  return (
    <div className="page-width swiper-container" {...storyblokEditable(blok)}>
      <div className="four-blocks-container">
        <div className="titresfaq">
          <h2>{ blok.headline }</h2>
          <a href="{ blok.top_link_url }" className="voirtous">{ blok.top_link_text }</a>
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

          {blok.add_item.map((nestedBlok) => (
            <SwiperSlide key={nestedBlok._uid}>
              <a href={nestedBlok.link} target="_blank" className="image-block" rel="noopener noreferrer">
                <span className="play-button"></span>
                <img src={nestedBlok.image.filename} alt={nestedBlok.title} />
                <h3>{nestedBlok.title}</h3>
              </a>
            </SwiperSlide>
          ))}


          
        </Swiper>
        <div className="swiper-pagination b1"></div>
      </div>
    </div>
  );
}

export default Adaptative_Quad_Images;
