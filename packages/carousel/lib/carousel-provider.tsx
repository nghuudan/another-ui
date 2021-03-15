import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

export type CarouselSliding = 'left' | 'right' | null;

export interface CarouselContextProps {
  /** Current index of the slide to display in the carousel */
  currentIndex: number;
  /** Slides as components to populate the carousel for display */
  slides?: Function[];
  /** Direction of the transition to the next or previous slide */
  sliding?: CarouselSliding;
  /** Show the previous slide */
  previous(): void,
  /** Show the next slide */
  next(): void,
  /** Current slide to show in the carousel */
  CurrentSlide?: Function;
  /** Previous slide to show on transition to previous slide */
  PreviousSlide?: Function;
  /** Next slide to show on transition to next slide */
  NextSlide?: Function;
  /** Sets the current index of the slide to display */
  setCurrentIndex(index: number): void;
  /** Sets the sliding direction for the transition */
  setSliding(sliding: CarouselSliding): void;
}

export const CarouselContext = createContext<CarouselContextProps>({
  currentIndex: 0,
  setCurrentIndex() {},
  setSliding() {},
  previous() {},
  next() {},
});

export const useCarousel = () => useContext(CarouselContext);

export interface CarouselProviderProps {
  /** Children to render within the carousel provider */
  children?: ReactNode;
  /** Sets the initial index for the slide to display */
  initial?: number;
  /** Slides as components to populate the carousel for display */
  slides?: Function[];
}

export const CarouselProvider = ({
  children,
  initial = 0,
  slides = [],
}: CarouselProviderProps) => {
  const [currentIndex, setCurrentIndex] = useState(initial);
  const [sliding, setSliding] = useState<CarouselSliding>(null);
  const previous = () => {
    if (currentIndex > 0) {
      setSliding('right');
    }
  };
  const next = () => {
    if (currentIndex < slides.length - 1) {
      setSliding('left');
    }
  };
  const PreviousSlide = slides[currentIndex - 1] || null;
  const CurrentSlide = slides[currentIndex] || null;
  const NextSlide = slides[currentIndex + 1] || null;
  const context = {
    currentIndex,
    slides,
    sliding,
    previous,
    next,
    CurrentSlide,
    PreviousSlide,
    NextSlide,
    setCurrentIndex: (value: number) => setCurrentIndex(value),
    setSliding: (value: CarouselSliding) => setSliding(value),
  };
  return (
    <CarouselContext.Provider value={context}>
      {children}
    </CarouselContext.Provider>
  );
};

export default CarouselProvider;
