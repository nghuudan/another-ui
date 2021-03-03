import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Drawer } from './drawer';

jest.useFakeTimers();

describe('Drawer', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <Drawer>
        <p data-testid="test-child" />
      </Drawer>,
    );
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should have class name from props', () => {
    const { container } = render(
      <Drawer className="test-class" />,
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('should have class name for open after mount', () => {
    const { container } = render(<Drawer />);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.firstChild).toHaveClass('aui-drawer-open');
  });

  it('should have class name for drawer direction default to bottom', () => {
    const { container } = render(<Drawer />);
    expect(container.firstChild).toHaveClass('aui-drawer-direction-bottom');
  });

  it('should have class name for drawer direction', () => {
    const { container } = render(<Drawer direction="left" />);
    expect(container.firstChild).toHaveClass('aui-drawer-direction-left');
  });

  it('should have class name for drawer padding', () => {
    const { container } = render(<Drawer padding />);
    expect(container.firstChild).toHaveClass('aui-drawer-padding');
  });

  it('should have class name for drawer body dark theme', () => {
    const { container } = render(<Drawer theme="dark" />);
    expect(container.firstChild).toHaveClass('aui-drawer-theme-dark');
  });
});
