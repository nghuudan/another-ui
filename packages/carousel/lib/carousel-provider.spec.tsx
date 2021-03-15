import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import { CarouselProvider, useCarousel } from './carousel-provider';

describe('CarouselProvider', () => {
  const SlideMock = jest.fn();

  it('should render children', () => {
    const { getByTestId } = render(
      <CarouselProvider>
        <p data-testid="test-child" />
      </CarouselProvider>,
    );
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should set sliding to left when next is called', () => {
    const TestController = () => {
      const { next, sliding } = useCarousel();
      useEffect(() => {
        next();
      }, []);
      return <p data-testid={sliding} />;
    };
    const { getByTestId } = render(
      <CarouselProvider slides={[SlideMock, SlideMock]}>
        <TestController />
      </CarouselProvider>,
    );
    expect(getByTestId('left')).toBeDefined();
  });

  it('should not set sliding to left when next is called and no next slide', () => {
    const TestController = () => {
      const { next, sliding } = useCarousel();
      useEffect(() => {
        next();
      }, []);
      return <p className={sliding || ''} />;
    };
    const { container } = render(
      <CarouselProvider slides={[SlideMock]}>
        <TestController />
      </CarouselProvider>,
    );
    expect(container.querySelectorAll('.left')).toHaveLength(0);
  });

  it('should set sliding to right when previous is called', () => {
    const TestController = () => {
      const { previous, sliding } = useCarousel();
      useEffect(() => {
        previous();
      }, []);
      return <p data-testid={sliding} />;
    };
    const { getByTestId } = render(
      <CarouselProvider initial={1} slides={[SlideMock, SlideMock]}>
        <TestController />
      </CarouselProvider>,
    );
    expect(getByTestId('right')).toBeDefined();
  });

  it('should not set sliding to right when previous is called and no previous slide', () => {
    const TestController = () => {
      const { previous, sliding } = useCarousel();
      useEffect(() => {
        previous();
      }, []);
      return <p className={sliding || ''} />;
    };
    const { container } = render(
      <CarouselProvider slides={[SlideMock]}>
        <TestController />
      </CarouselProvider>,
    );
    expect(container.querySelectorAll('.right')).toHaveLength(0);
  });

  it('should set current index when called', () => {
    const TestController = () => {
      const { currentIndex, setCurrentIndex } = useCarousel();
      useEffect(() => {
        setCurrentIndex(1);
      }, []);
      return <p data-testid={`test-${currentIndex}`} />;
    };
    const { getByTestId } = render(
      <CarouselProvider slides={[SlideMock, SlideMock]}>
        <TestController />
      </CarouselProvider>,
    );
    expect(getByTestId('test-1')).toBeDefined();
  });

  it('should set sliding when called', () => {
    const TestController = () => {
      const { sliding, setSliding } = useCarousel();
      useEffect(() => {
        setSliding('left');
      }, []);
      return <p data-testid={sliding} />;
    };
    const { getByTestId } = render(
      <CarouselProvider slides={[SlideMock, SlideMock]}>
        <TestController />
      </CarouselProvider>,
    );
    expect(getByTestId('left')).toBeDefined();
  });
});
