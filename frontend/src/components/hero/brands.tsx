import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import i1 from "../../assets/brands/1.png";
import i2 from "../../assets/brands/2.png";
import i3 from "../../assets/brands/3.png";
import i4 from "../../assets/brands/4.png";
import i5 from "../../assets/brands/5.png";
import i6 from "../../assets/brands/6.png";
import i7 from "../../assets/brands/7.png";

function Slide({ src }: { src: string }) {
  return <img src={src} alt="i1" className="h-10" />;
}

export default function Brands() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={7}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop
        speed={1500}
      >
        <SwiperSlide>
          <Slide src={i1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i3} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i4} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i5} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i6} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i3} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i4} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i5} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i6} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i1} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i2} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i3} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i4} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i5} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i6} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide src={i7} />
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 z-10 bg-linear-to-r from-background via-transparent to-background" />
    </div>
  );
}
