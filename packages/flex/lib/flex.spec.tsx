import React from 'react';
import { render } from '@testing-library/react';
import { Flex } from './flex';

describe('Flex', () => {
  it('should render children', () => {
    const { getByTestId } = render(<Flex><p data-testid="test-child" /></Flex>);
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should have class name from props', () => {
    const { container } = render(<Flex className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('should have class name for align', () => {
    const { container } = render(<Flex align="center" />);
    expect(container.firstChild).toHaveClass('aui-flex-align-center');
  });

  it('should have class name for basis', () => {
    const { container } = render(<Flex basis={50} />);
    expect(container.firstChild).toHaveClass('aui-flex-basis-50');
  });

  it('should have class name for direction', () => {
    const { container } = render(<Flex direction="row" />);
    expect(container.firstChild).toHaveClass('aui-flex-direction-row');
  });

  it('should have class name for grow', () => {
    const { container } = render(<Flex grow />);
    expect(container.firstChild).toHaveClass('aui-flex-grow');
  });

  it('should have class name for justify', () => {
    const { container } = render(<Flex justify="center" />);
    expect(container.firstChild).toHaveClass('aui-flex-justify-center');
  });

  it('should have class name for shrink', () => {
    const { container } = render(<Flex shrink />);
    expect(container.firstChild).toHaveClass('aui-flex-shrink');
  });

  it('should have class name for wrap', () => {
    const { container } = render(<Flex wrap />);
    expect(container.firstChild).toHaveClass('aui-flex-wrap');
  });
});
