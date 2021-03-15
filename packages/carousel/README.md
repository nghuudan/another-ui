# `@another-ui/carousel`

Just another carousel component for React

## Usage

```js
import React from 'react';
import { Carousel, CarouselProvider, useCarousel } from '@another-ui/carousel';
import '@another-ui/carousel/dist/carousel.css';

const SlideOne = () => <h1>Slide One</h1>;
const SlideTwo = () => <h1>Slide Two</h1>;
const SlideThree = () => <h1>Slide Three</h1>;

const Controller = () => {
  const {
    previous,
    next,
    PreviousSlide,
    NextSlide,
  } = useCarousel();

  return (
    <div>
      <button
        disabled={!PreviousSlide}
        onClick={() => previous()}
        type="button"
      >
        Previous
      </button>
      <button
        disabled={!NextSlide}
        onClick={() => next()}
        type="button"
      >
        Next
      </button>
    </div>
  );
};

export const Example = () => (
  <CarouselProvider initial={1} slides={[SlideOne, SlideTwo, SlideThree]}>
    <Carousel className="custom-class" theme="dark" />
    <Controller />
  </CarouselProvider>
);
```
