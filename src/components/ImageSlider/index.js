import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';

function ImageSlider(slides) {

    slides = slides.slides;

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] w-full m-auto relative group'>
            <div
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            >
                <img width="100%" src={slides[currentIndex]}/>
            </div>
            {/* Left Arrow */}
            <div
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                style={slides.length < 2 ? {display: "none"} : {}}>
                < BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            {/* Right Arrow */}
            <div
                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                style={slides.length < 2 ? {display: "none"} : {}}>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
        </div>
    )
        ;
}

export default ImageSlider;