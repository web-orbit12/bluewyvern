import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Grid, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

SwiperCore.use([Pagination, Autoplay, Grid, Navigation]); // Use Swiper's Pagination, Autoplay, Grid, and Navigation components

const Slider_Three_Block = ({ blok }) => {
  return (
    <div className="page-width swiper-container mobile-full-width" {...storyblokEditable(blok)}>
      <div className="slider-three-blocks-container">
        <h2>{blok.headline}</h2>
        <Swiper
          className="swiper5"
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ el: ".swiper-pagination.b5", clickable: true }}
          navigation={{
            nextEl: ".swiper5-button-next",
            prevEl: ".swiper5-button-prev",
          }}
          direction='horizontal'
          loop={false}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1140: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
        >
          {blok.add_item.map((nestedBlok) => (
            <SwiperSlide key={nestedBlok._uid}>
              <a href={nestedBlok.link.url} target="_blank" className="image-block" rel="noopener noreferrer">
                <img src={nestedBlok.image.filename} alt={nestedBlok.title} loading="lazy" />
                <h3>{nestedBlok.title}</h3>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination b5"></div>
        <div className="swiper5-button-prev swiper-button-prev"></div>
        <div className="swiper5-button-next swiper-button-next"></div>
      </div>
    </div>
  );
}

export default Slider_Three_Block;
