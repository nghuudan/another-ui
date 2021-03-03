import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';
import { Header } from './header';

jest.useFakeTimers();

describe('Header', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <Header>
        <p data-testid="test-child" />
      </Header>,
    );
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should have class name from props', () => {
    const { container } = render(<Header className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('should have class name for fixed', () => {
    const { container } = render(<Header fixed />);
    expect(container.firstChild).toHaveClass('aui-header-fixed');
  });

  it('should have class name for padding', () => {
    const { container } = render(<Header padding />);
    expect(container.firstChild).toHaveClass('aui-header-padding');
  });

  it('should have class name for dark theme', () => {
    const { container } = render(<Header theme="dark" />);
    expect(container.firstChild).toHaveClass('aui-header-theme-dark');
  });

  it('should have class name for fixed when sticky scrolled below', () => {
    const { container } = render(<Header sticky />);
    act(() => {
      fireEvent.scroll(window, {
        target: {
          scrollingElement: {
            scrollTop: 100,
          },
        },
      });
      jest.runAllTimers();
    });
    expect(container.firstChild).toHaveClass('aui-header-fixed');
  });

  it('should not have class name for fixed when sticky scrolled above', () => {
    const { container } = render(<Header sticky />);
    act(() => {
      fireEvent.scroll(window, {
        target: {
          scrollingElement: {
            scrollTop: -50,
          },
        },
      });
      jest.runAllTimers();
    });
    expect(container.firstChild).not.toHaveClass('aui-header-fixed');
  });
});
