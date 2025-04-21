import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/Carousel.css";

// Image imports as regular paths (adjust based on your public/images folder setup)

const items = [
  {
    bgColor: "#e9e9e9",
    imgSrc: "https://html.creativegigstf.com/charles/images/icon/2.png",
    title: "Emerging Ideas",
    description:
      "Innovative concepts with the potential to disrupt industries.",
  },
  {
    bgColor: "#fafafa",
    imgSrc: "https://html.creativegigstf.com/charles/images/icon/3.png",
    title: "Thought Leadership",
    description: "Establishing authority and influencing through expertise.",
  },
  {
    bgColor: "#e9e9e9",
    imgSrc: "https://html.creativegigstf.com/charles/images/icon/4.png",
    title: "Marketing Goals",
    description: "Measurable objectives driving marketing strategy.",
  },
  {
    bgColor: "#fafafa",
    imgSrc: "https://html.creativegigstf.com/charles/images/icon/1.png",
    title: "Consumer Insights",
    description: "Understanding customer behavior to tailor strategies.",
  },
];

export default function GallerySection() {
  return (
    <section className="section-gallery w-full">
      <div className="w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          speed={2000}
          className="gallery-slider w-full"
          modules={[Autoplay]}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <div
                className="gallery-item w-full p-6 rounded-lg text-center"
                style={{ background: item.bgColor }}
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="gallery-image"
                />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
