import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/swiper.min.css";
import Img1 from "../../assets/001.jpeg";
import Img2 from "../../assets/002.jpeg";
import Img3 from "../../assets/003.jpeg";
import Img4 from "../../assets/004.jpeg";
import Img5 from "../../assets/006.jpeg";
import Img6 from "../../assets/007.jpeg";

import "../styles/database.css";

function Database() {
  return (
    <div>
      <div className="paragraph">
        <h1 className="datahead"> Database</h1>
        <p className="datapara">
          A database is information that is set up for easy access, management
          and updating. Computer databases typically store aggregations of data
          records or files that contain information, such as sales transactions,
          customer data, financials and product information.
        </p>
      </div>
      <div className="swwiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="slider_img" src={Img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_img" src={Img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_img" src={Img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_img" src={Img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_img" src={Img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_img" src={Img6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Database;
