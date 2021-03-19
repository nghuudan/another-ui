import React from 'react';
import { render } from '@testing-library/react';
import { Responsive } from './responsive';

describe('Responsive', () => {
  it('should render children', () => {
    const { getByTestId } = render(<Responsive><p data-testid="test-child" /></Responsive>);
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should have class name from props', () => {
    const { container } = render(<Responsive className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('should have the class name for sm hide', () => {
    const { container } = render(<Responsive sm="hide" />);
    expect(container.firstChild).toHaveClass('aui-responsive-sm-hide');
  });

  it('should have the class name for sm only', () => {
    const { container } = render(<Responsive sm="only" />);
    expect(container.firstChild).toHaveClass('aui-responsive-sm-only');
  });

  it('should have the class name for sm show', () => {
    const { container } = render(<Responsive sm="show" />);
    expect(container.firstChild).toHaveClass('aui-responsive-sm-show');
  });

  it('should have the class name for md hide', () => {
    const { container } = render(<Responsive md="hide" />);
    expect(container.firstChild).toHaveClass('aui-responsive-md-hide');
  });

  it('should have the class name for md only', () => {
    const { container } = render(<Responsive md="only" />);
    expect(container.firstChild).toHaveClass('aui-responsive-md-only');
  });

  it('should have the class name for md show', () => {
    const { container } = render(<Responsive md="show" />);
    expect(container.firstChild).toHaveClass('aui-responsive-md-show');
  });

  it('should have the class name for lg hide', () => {
    const { container } = render(<Responsive lg="hide" />);
    expect(container.firstChild).toHaveClass('aui-responsive-lg-hide');
  });

  it('should have the class name for lg only', () => {
    const { container } = render(<Responsive lg="only" />);
    expect(container.firstChild).toHaveClass('aui-responsive-lg-only');
  });

  it('should have the class name for lg show', () => {
    const { container } = render(<Responsive lg="show" />);
    expect(container.firstChild).toHaveClass('aui-responsive-lg-show');
  });

  it('should have the class name for xl hide', () => {
    const { container } = render(<Responsive xl="hide" />);
    expect(container.firstChild).toHaveClass('aui-responsive-xl-hide');
  });

  it('should have the class name for xl only', () => {
    const { container } = render(<Responsive xl="only" />);
    expect(container.firstChild).toHaveClass('aui-responsive-xl-only');
  });

  it('should have the class name for xl show', () => {
    const { container } = render(<Responsive xl="show" />);
    expect(container.firstChild).toHaveClass('aui-responsive-xl-show');
  });
});
