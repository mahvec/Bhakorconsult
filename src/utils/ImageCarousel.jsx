import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickIndicator = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      <img
        src={images[activeIndex]}
        alt="carousel-image"
        className="mt-4 rounded-lg mb-2"
      />
      <div className="flex items-center justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleClickIndicator(index)}
            className={`h-3 w-3 rounded-full bg-gray-400 mr-2 ${
              index === activeIndex ? "bg-gray-800" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
