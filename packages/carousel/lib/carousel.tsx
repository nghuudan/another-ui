import React, { TransitionEvent, useRef } from 'react';
import { useCarousel } from './carousel-provider';

export interface CarouselProps {
  /** Optional class name for the carousel */
  className?: string;
  /** Optional theme for the carousel */
  theme?: 'dark';
}

export const Carousel = ({ className, theme }: CarouselProps) => {
  const slidesRef = useRef(null);
  const {
    currentIndex,
    setCurrentIndex,
    sliding,
    setSliding,
    CurrentSlide,
    NextSlide,
    PreviousSlide,
  } = useCarousel();
  const cls = ['aui-carousel'];
  const slidesCls = ['aui-carousel-slides'];
  const handleTransitionEnd = (event: TransitionEvent) => {
    if (event.target === slidesRef.current) {
      if (sliding === 'left') {
        setCurrentIndex(currentIndex + 1);
        setSliding(null);
      } else if (sliding === 'right') {
        setCurrentIndex(currentIndex - 1);
        setSliding(null);
      }
    }
  };

  if (className) cls.push(className);
  if (theme) cls.push(`aui-carousel-theme-${theme}`);
  if (sliding) slidesCls.push(`aui-carousel-sliding-${sliding}`);

  return (
    <div className={cls.join(' ')}>
      <ul className={slidesCls.join(' ')} onTransitionEnd={handleTransitionEnd} ref={slidesRef}>
        <li
          aria-hidden="true"
          className={`aui-carousel-item ${sliding === 'right' ? 'aui-carousel-entering' : ''}`}
          tabIndex={-1}
        >
          {PreviousSlide ? <PreviousSlide /> : null}
        </li>
        <li className={`aui-carousel-item ${!sliding ? 'aui-carousel-current' : ''}`}>
          {CurrentSlide ? <CurrentSlide /> : null}
        </li>
        <li
          aria-hidden="true"
          className={`aui-carousel-item ${sliding === 'left' ? 'aui-carousel-entering' : ''}`}
          tabIndex={-1}
        >
          {NextSlide ? <NextSlide /> : null}
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
