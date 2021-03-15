import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { CarouselContext } from './carousel-provider';
import { Carousel } from './carousel';

describe('Carousel', () => {
  const previousMock = jest.fn();
  const nextMock = jest.fn();
  const setCurrentIndexMock = jest.fn();
  const setSlidingMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('should have class name from props', () => {
    const { container } = render(
      <Carousel className="test-class" />,
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('should have class name for dark theme', () => {
    const { container } = render(
      <Carousel theme="dark" />,
    );
    expect(container.firstChild).toHaveClass('aui-carousel-theme-dark');
  });

  it('should render CurrentSlide when defined', () => {
    const { getByTestId } = render(
      <CarouselContext.Provider value={{
        currentIndex: 0,
        previous: previousMock,
        next: nextMock,
        setCurrentIndex: setCurrentIndexMock,
        setSliding: setSlidingMock,
        PreviousSlide: () => null,
        CurrentSlide: () => <p data-testid="current-slide" />,
        NextSlide: () => null,
      }}
      >
        <Carousel />
      </CarouselContext.Provider>,
    );
    expect(getByTestId('current-slide')).toBeDefined();
  });

  it('should call setCurrentIndex with 1 when sliding left on transition end', () => {
    const { container } = render(
      <CarouselContext.Provider value={{
        currentIndex: 0,
        previous: previousMock,
        next: nextMock,
        sliding: 'left',
        setCurrentIndex: setCurrentIndexMock,
        setSliding: setSlidingMock,
      }}
      >
        <Carousel />
      </CarouselContext.Provider>,
    );
    const slides = container.querySelector('.aui-carousel-slides') as HTMLUListElement;
    fireEvent.transitionEnd(slides);
    expect(setCurrentIndexMock).toBeCalledWith(1);
  });

  it('should call setCurrentIndex with 0 when sliding right on transition end', () => {
    const { container } = render(
      <CarouselContext.Provider value={{
        currentIndex: 1,
        previous: previousMock,
        next: nextMock,
        sliding: 'right',
        setCurrentIndex: setCurrentIndexMock,
        setSliding: setSlidingMock,
      }}
      >
        <Carousel />
      </CarouselContext.Provider>,
    );
    const slides = container.querySelector('.aui-carousel-slides') as HTMLUListElement;
    fireEvent.transitionEnd(slides);
    expect(setCurrentIndexMock).toBeCalledWith(0);
  });

  it('should not call setCurrentIndex on transition end and not event target', () => {
    const { container } = render(
      <CarouselContext.Provider value={{
        currentIndex: 1,
        previous: previousMock,
        next: nextMock,
        sliding: 'right',
        setCurrentIndex: setCurrentIndexMock,
        setSliding: setSlidingMock,
      }}
      >
        <Carousel />
      </CarouselContext.Provider>,
    );
    const item = container.querySelector('.aui-carousel-item') as HTMLLIElement;
    fireEvent.transitionEnd(item);
    expect(setCurrentIndexMock).not.toBeCalled();
  });

  it('should not call setCurrentIndex on transition end and not sliding', () => {
    const { container } = render(
      <CarouselContext.Provider value={{
        currentIndex: 1,
        previous: previousMock,
        next: nextMock,
        setCurrentIndex: setCurrentIndexMock,
        setSliding: setSlidingMock,
      }}
      >
        <Carousel />
      </CarouselContext.Provider>,
    );
    const slides = container.querySelector('.aui-carousel-slides') as HTMLUListElement;
    fireEvent.transitionEnd(slides);
    expect(setCurrentIndexMock).not.toBeCalled();
  });
});
