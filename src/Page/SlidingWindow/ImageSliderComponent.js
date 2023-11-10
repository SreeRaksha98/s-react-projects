import React, { useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const ImageSliderComponent = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider h-3/6 md:h-full py-8'>
      <IoIosArrowDropleftCircle className='left-arrow' onClick={prevSlide} />
      <IoIosArrowDroprightCircle className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'duration-500 slide active lg:duration-1000 ' : 'duration-500 slide lg:duration-1000'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='travel image' className='image h-3/6 md:h-full' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSliderComponent;
