import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Grid, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

SwiperCore.use([Pagination, Autoplay, Grid, Navigation]); // Use Swiper's Pagination, Autoplay, Grid, and Navigation components

const Slider_Four_Block = ({ blok }) => {
  return (
    <div className="page-width swiper-container mobile-full-width" {...storyblokEditable(blok)}>
      <div className="slider-four-blocks-container">
        <h2>{blok.headline}</h2>
        <Swiper
          className="swiper4"
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ el: ".swiper-pagination.b4", clickable: true }}
          navigation={{
            nextEl: ".swiper4-button-next",
            prevEl: ".swiper4-button-prev",
          }}
          direction='horizontal'
          loop={false}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1140: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
        >
          {blok.add_item.map((nestedBlok) => (
            <SwiperSlide key={nestedBlok._uid}>
              <a href={nestedBlok.link.url} className="image-block" rel="noopener noreferrer">
                <img src={nestedBlok.image.filename} alt={nestedBlok.title} />
                <h3>{nestedBlok.title}</h3>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination b4"></div>
        <div className="swiper4-button-prev swiper-button-prev"></div>
        <div className="swiper4-button-next swiper-button-next"></div>
      </div>
    </div>
  );
}

export default Slider_Four_Block;
