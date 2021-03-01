import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Dialog } from './dialog';

jest.useFakeTimers();

describe('Dialog', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <Dialog>
        <p data-testid="test-child" />
      </Dialog>,
    );
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should have class name from props', () => {
    const { container } = render(
      <Dialog className="test-class" />,
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('should have class name for showing after mount', () => {
    const { container } = render(<Dialog />);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.firstChild).toHaveClass('aui-dialog-showing');
  });

  it('should set body style overflow to hidden', () => {
    render(<Dialog />);
    expect(global.document.body).toHaveStyle({ overflow: 'hidden' });
  });

  it('should not set body style overflow to hidden when scrolling is allowed', () => {
    render(<Dialog scrolling />);
    expect(global.document.body).not.toHaveStyle({ overflow: 'hidden' });
  });

  it('should have button for dialog overlay', () => {
    const { container } = render(<Dialog overlay />);
    expect(container.querySelector('.aui-dialog-overlay')).toBeInstanceOf(HTMLButtonElement);
  });

  it('should call handler for on click overlay', () => {
    const handleOnClickOverlay = jest.fn();
    const { container } = render(<Dialog onClickOverlay={handleOnClickOverlay} overlay />);
    const overlay = container.querySelector('.aui-dialog-overlay') as HTMLButtonElement;
    fireEvent.click(overlay);
    expect(handleOnClickOverlay).toBeCalled();
  });

  it('should have class name for dialog body padding', () => {
    const { container } = render(<Dialog padding />);
    expect(container.querySelector('.aui-dialog-body')).toHaveClass('aui-dialog-padding');
  });

  it('should have class name for dialog body dark theme', () => {
    const { container } = render(<Dialog theme="dark" />);
    expect(container.querySelector('.aui-dialog-body')).toHaveClass('aui-dialog-theme-dark');
  });
});
