import React from 'react';
import {
  Carousel,
  CarouselProvider,
  useCarousel,
} from '../packages/carousel/lib';
import styles from './stories.module.scss';
import '../packages/carousel/lib/carousel.scss';

const SlideOne = () => <h1 className={styles['slide-example']}>Slide One</h1>;
const SlideTwo = () => <h1 className={styles['slide-example']}>Slide Two</h1>;
const SlideThree = () => <h1 className={styles['slide-example']}>Slide Three</h1>;

const CarouselController = () => {
  const {
    currentIndex,
    setCurrentIndex,
    previous,
    next,
    PreviousSlide,
    NextSlide,
  } = useCarousel();

  return (
    <div className={styles['carousel-controller']}>
      <button
        className={styles['slide-button']}
        disabled={currentIndex === 0}
        onClick={() => setCurrentIndex(0)}
        type="button"
      >
        First
      </button>
      <button
        className={styles['slide-button']}
        disabled={!PreviousSlide}
        onClick={() => previous()}
        type="button"
      >
        Previous
      </button>
      <button
        className={styles['slide-button']}
        disabled={!NextSlide}
        onClick={() => next()}
        type="button"
      >
        Next
      </button>
      <button
        className={styles['slide-button']}
        disabled={currentIndex === 2}
        onClick={() => setCurrentIndex(2)}
        type="button"
      >
        Last
      </button>
    </div>
  );
};

export const CustomClassNames = () => (
  <CarouselProvider slides={[SlideOne, SlideTwo, SlideThree]}>
    <Carousel className={styles['carousel-example']} />
    <CarouselController />
  </CarouselProvider>
);

export const CustomFrame = () => (
  <CarouselProvider slides={[SlideOne, SlideTwo, SlideThree]}>
    <div className={styles['carousel-frame']}>
      <Carousel />
    </div>
    <CarouselController />
  </CarouselProvider>
);

export const DarkTheme = () => (
  <CarouselProvider slides={[SlideOne, SlideTwo, SlideThree]}>
    <Carousel theme="dark" />
    <CarouselController />
  </CarouselProvider>
);

export const TryItOut = () => (
  <CarouselProvider slides={[SlideOne, SlideTwo, SlideThree]}>
    <Carousel />
    <CarouselController />
  </CarouselProvider>
);

export default {
  title: 'Containers/Carousel',
};
