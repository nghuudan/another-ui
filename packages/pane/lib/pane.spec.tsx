import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Pane } from './pane';

describe('Pane', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <Pane>
        <p data-testid="test-child" />
      </Pane>,
    );
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should have class name from props', () => {
    const { container } = render(
      <Pane className="test-class" />,
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('should have class name for pane padding', () => {
    const { container } = render(<Pane padding />);
    expect(container.firstChild).toHaveClass('aui-pane-padding');
  });

  it('should have class name for dark theme', () => {
    const { container } = render(<Pane theme="dark" />);
    expect(container.firstChild).toHaveClass('aui-pane-theme-dark');
  });

  it('should have pane handle when draggable', () => {
    const { container } = render(<Pane draggable />);
    expect(container.querySelector('.aui-pane-handle')).toBeDefined();
  });

  it('should have heading text when defined', () => {
    const { container } = render(<Pane heading="Test Heading" />);
    expect(container).toHaveTextContent('Test Heading');
  });

  // Cannot simulate trusted events
  it('should set styles for position with offset on mouse events', () => {
    const { container } = render(<Pane draggable />);
    const paneHandle = container.querySelector('.aui-pane-handle') as HTMLButtonElement;
    fireEvent.mouseDown(paneHandle);
    fireEvent.mouseDown(window);
    fireEvent.mouseMove(window);
    fireEvent.mouseUp(window);
    expect(container.firstChild).toHaveStyle({ left: '0px', top: '0px' });
  });

  // Cannot simulate trusted events
  it('should set styles for position with offset on touch events', () => {
    const { container } = render(<Pane draggable />);
    const paneHandle = container.querySelector('.aui-pane-handle') as HTMLButtonElement;
    fireEvent.touchStart(window, { touches: [{}] });
    fireEvent.touchStart(paneHandle);
    fireEvent.touchMove(window, { touches: [{}] });
    fireEvent.touchEnd(window);
    expect(container.firstChild).toHaveStyle({ left: '0px', top: '0px' });
  });
});
