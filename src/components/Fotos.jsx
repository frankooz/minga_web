import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
const sliderData = [
  {
    url: 'img2.jpg',
  },
  {
    url: 'img3.jpg',
  },
  {
    url: 'img4.jpg',
  },
  {
    url: 'img1.JPG',
  },
];
const Fotos = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <div name="Fotos" className='relative flex justify-center items-center'>
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide && (
            <img className='w-full' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
  );
};
export default Fotos;