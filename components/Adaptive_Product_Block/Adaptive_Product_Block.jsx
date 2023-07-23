import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Grid, Autoplay, Pagination } from 'swiper/modules';

SwiperCore.use([Pagination, Autoplay, Grid]); // Use Swiper's Pagination, Autoplay, and Grid components

const Adaptive_Product_Block = ({ blok }) => {

    return (
      <div className="page-width" {...storyblokEditable(blok)}>
        <div className="five-blocks-container">
          <div className="blockimage1">
            <a href={blok.featured_image_button_link.url} target="_blank" className="image-block">
              <h3>{blok.featured_image_title}</h3>
              <h3 className="decouvrir">{blok.featured_image_button_title}</h3>
            </a>
          </div>

          <style jsx>{`
            .five-blocks-container .blockimage1 .image-block:before {
                background: url(${blok.featured_image.filename}) no-repeat top center;
            }
          `}</style>

  


          <div className="swiper-container">   
                <Swiper
                    className="swiper2"
                    spaceBetween={10}
                    slidesPerView={2.15}
                    pagination={{ el: ".swiper-pagination.b2", clickable: true }}
                    direction='horizontal'
                    loop={false}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        768: {
                        slidesPerView: 2.5
                        },
                        1140: {
                        slidesPerView: 2.5,
                        loop: false,
                        spaceBetween: 10,
                        grid: {
                            rows: 2,
                            fill: 4,
                        },
                        }
                    }}
                    >

        
                    {blok.add_products.map((nestedBlok) => (
        
                    <SwiperSlide key={nestedBlok._uid}>
                        <a href={nestedBlok.product_link.url} target="_blank" className="image-block" rel="noopener noreferrer">
                        <div className="imgcover">
                            <img src={nestedBlok.featured_image.filename} alt={nestedBlok.product_title} />
                        </div>
                        <div className="text-block">
                            <h3>{nestedBlok.product_title}</h3>
                            <span className="price">{nestedBlok.product_price}€</span>
                            <span className="voir">Voir le produit</span>
                        </div> 
                        </a>
                    </SwiperSlide>
        
                    ))}
        
                </Swiper>
                
                <div className="swiper-pagination b2"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Adaptive_Product_Block;