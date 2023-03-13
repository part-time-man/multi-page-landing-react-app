import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import classes from "./reviews.module.scss";

import r1 from "../../assets/imgs/reviews/r1.jpg";
import r2 from "../../assets/imgs/reviews/r2.jpg";

export const Reviews = () => {
  return (
    <section className={classes.reviews} id='reviews'>
      <h2 className={classes.reviews__title}>Opinie klientów</h2>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <Zoom classDialog={`${classes["swiper-block"]}`}>
            <img alt="review" src={r1} className={classes.swiper__img} />
          </Zoom>
        </SwiperSlide>
        <SwiperSlide>
          <Zoom classDialog={`${classes["swiper-block"]}`}>
            <img alt="review" src={r2} className={classes.swiper__img} />
          </Zoom>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  );
};
