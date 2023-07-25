import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState, useEffect, useRef } from 'react';

SwiperCore.use([Pagination, Autoplay, Navigation]); // Use Swiper's Pagination, Autoplay, and Navigation components

  const Hero_Slider = ({ blok }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const imgRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    }

    if (imgRef.current && videoWrapperRef.current) {
      const aspectRatio = imgRef.current.clientHeight / imgRef.current.clientWidth;
      videoWrapperRef.current.style.height = `${videoWrapperRef.current.clientWidth * aspectRatio}px`;
    }

    return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);


  const getVideoId = (url) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if(ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  };

  const renderSlide = (nestedBlok) => {
    if (nestedBlok.component === "video_slide_item") {
      return (
        <div className="videowrapper" ref={videoWrapperRef}> 
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${getVideoId(nestedBlok.video_url.url)}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&loop=1&iv_load_policy=3&playlist=${getVideoId(nestedBlok.video_url.url)}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          />
        </div>
      );
    } else {
      if (windowWidth < 768) {
        return <img src={nestedBlok.image_mobile?.filename} alt={nestedBlok.title} ref={imgRef} />
      } else {
        return <img src={nestedBlok.image_desktop?.filename} alt={nestedBlok.title} ref={imgRef} />
      }
    }
  }

  return (
    <div className="swiper-container mobile-full-width" {...storyblokEditable(blok)}>
      <div className="hero-slider-container">
        <Swiper
          className="swiper7"
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: ".swiper7-button-next",
            prevEl: ".swiper7-button-prev",
            clickable: true,
          }}
          direction='horizontal'
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1140: {
              slidesPerView: 1,
            }
          }}
        >
          {blok.add_slide.map((nestedBlok) => {
            return (
              <SwiperSlide key={nestedBlok._uid}>
                {renderSlide(nestedBlok)}
                <a href={nestedBlok.link?.url} className="button" rel="noopener noreferrer">
                  {nestedBlok.button_text}
                </a>
              </SwiperSlide>
            );
          })}

        </Swiper>

        <div className="swiper-pagination b7"></div>
        <div className="swiper7-button-prev swiper-button-prev"></div>
        <div className="swiper7-button-next swiper-button-next"></div>
      </div>
    </div>
  );
}

export default Hero_Slider;
