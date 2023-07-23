import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

SwiperCore.use([Pagination, Navigation]); // Use Swiper's Pagination and Navigation components

const Slider_Eight_Block = ({ blok }) => {
  const [activeCategory, setActiveCategory] = useState("featured"); // Set initial state to "featured"
  
  const categoryMap = {
    "Les plus populaires": "featured",
    "A-H": "a_h",
    "I-S": "i_s",
    "T-Z": "t_z",
  };

  return (
    <div className="page-width swiper-container" {...storyblokEditable(blok)}>
      <div className="slider-eight-blocks-container">
        <h2>{blok.headline}</h2>
        <div className="onglets-cat">
          {Object.keys(categoryMap).map((cat) => (
            <a
              key={cat}
              className={cat.replace(/\s+/g, "") + (activeCategory === categoryMap[cat] ? " active" : "")}
              onClick={() => setActiveCategory(categoryMap[cat])}
            >
              {cat}
            </a>
          ))}
        </div>
        <Swiper
          className="swiper6 clone1 active"
          slidesPerView={3.25}
          spaceBetween={20}
          slidesPerGroup={3}
          pagination={{ el: ".swiper-pagination.b6", clickable: true }}
          navigation={{
            nextEl: ".swiper6-button-next",
            prevEl: ".swiper6-button-prev",
          }}
          direction='horizontal'
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 8,
              spaceBetween: 20,
              slidesPerGroup: 8,
            },
            1140: {
              slidesPerView: 8,
              spaceBetween: 20,
              slidesPerGroup: 8,
            }
          }}
        >
          {blok.liste_marques.filter(nestedBlok => activeCategory === 'featured' ? nestedBlok.featured : nestedBlok.category === activeCategory).map((nestedBlok, index) => (
            <SwiperSlide key={index}>
              <a href={nestedBlok.link.url} target="_blank" className="image-block" rel="noopener noreferrer">
                <img src={nestedBlok.image.filename} alt={nestedBlok.title} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination b6"></div>
        <div className="swiper6-button-prev swiper-button-prev"></div>
        <div className="swiper6-button-next swiper-button-next"></div>
      </div>
    </div>
  );
}

export default Slider_Eight_Block;
