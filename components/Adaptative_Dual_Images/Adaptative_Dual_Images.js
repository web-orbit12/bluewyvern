import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

SwiperCore.use([Pagination]); // Use Swiper's Pagination component

const Adaptative_Dual_Images = ({ blok }) => {
 
  return (
    <div className="page-width swiper-container mobile-full-width" {...storyblokEditable(blok)}>
      <div className="two-blocks-container">

        <Swiper
          className="swiper3"
          spaceBetween={0}
          slidesPerView={1}
          direction='horizontal'
          loop={false}
          pagination={{ 
            el: '.swiper-pagination.b3',
            clickable: true 
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1140: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          }}
        >
          {blok.add_item.map((nestedBlok) => (
            <SwiperSlide key={nestedBlok._uid}>
              <a href={nestedBlok.link} target="_blank" className="image-block" rel="noopener noreferrer">
                <img className="hide-for-mobile" src={nestedBlok.image.filename} alt={nestedBlok.title} />
                <img className="hide-for-desktop" src={nestedBlok.image_mobile.filename} alt={nestedBlok.title} />
                <h3>{nestedBlok.title}</h3>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination b3"></div>
      </div>
    </div>
  );
}

export default Adaptative_Dual_Images;
