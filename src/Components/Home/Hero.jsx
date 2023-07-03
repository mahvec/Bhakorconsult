import { useState } from "react";
import { slides } from "../../utils/array";
import HeroSlide from "./HeroSlide";
import back from "../../assets/images/aboutbhakor.jpg"

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`bg-${back} bg-no-repeat bg-cover bg-center justify-center  transition ease-in-out duration-700 mt-10 lg:mt-28`}>

      <div
        className=""
        style={{ transform: `translate:(-${activeIndex * 100})` }}
      >
        {slides.map((slide, index) => (
          <HeroSlide
            key={index}
            slide={slide}
            isActive={index === activeIndex}
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
            totalSlides={slides.length}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
