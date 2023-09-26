import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { API_IMAGE_URL } from "@/utils/urls";

const ProductDetailsCarousel = ({ images }) => {
  console.log(images);

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images &&
          images.map((i) => {
            <img
              key={i.id}
              src={`${API_IMAGE_URL}${i.attributes.url}`}
              alt={i.attributes.name}
            />;
          })}
        <img src="/p2.png" />
        <img src="/p3.png" />
        <img src="/p4.png" />
        <img src="/p5.png" />
        <img src="/p6.png" />
        <img src="/p7.png" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
