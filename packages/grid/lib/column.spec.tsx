import React from 'react';
import { render } from '@testing-library/react';
import { Column } from './column';

describe('Column', () => {
  it('should render children', () => {
    const { getByTestId } = render(<Column><p data-testid="test-child" /></Column>);
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should have class name from props', () => {
    const { container } = render(<Column className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('should have class name for sm column size', () => {
    const { container } = render(<Column sm={3} />);
    expect(container.firstChild).toHaveClass('aui-col-sm-3');
  });

  it('should have class name for md column size', () => {
    const { container } = render(<Column md={4} />);
    expect(container.firstChild).toHaveClass('aui-col-md-4');
  });

  it('should have class name for lg column size', () => {
    const { container } = render(<Column lg={5} />);
    expect(container.firstChild).toHaveClass('aui-col-lg-5');
  });

  it('should have class name for xl column size', () => {
    const { container } = render(<Column xl={6} />);
    expect(container.firstChild).toHaveClass('aui-col-xl-6');
  });
});
