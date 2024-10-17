import { useState } from 'react';
import './Carousel.css';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { backgroundColor: '#4ec01e' }, // Verde
    { backgroundColor: '#ce1515' }, // Vermelho
    { backgroundColor: '#193dbc' }, // Cinza claro
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='carousel-container'>
      <div
        className='carousel-slide'
        style={{ backgroundColor: slides[currentIndex].backgroundColor }}
      >
        <p>Slide {currentIndex + 1}</p>
      </div>
      <div className='carousel-controls'>
        <button
          className={`${currentIndex === 0 ? 'disabled' : ''} carousel-btn`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          className={`${currentIndex === 2 ? 'disabled' : ''} carousel-btn`}
          onClick={nextSlide}
          disabled={currentIndex === 2}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
