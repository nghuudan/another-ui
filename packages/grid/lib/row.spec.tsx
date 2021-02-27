import React from 'react';
import { render } from '@testing-library/react';
import { Row } from './row';

describe('Row', () => {
  it('should render children', () => {
    const { getByTestId } = render(<Row><p data-testid="test-child" /></Row>);
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should have class name from props', () => {
    const { container } = render(<Row className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('should have class name for gutters', () => {
    const { container } = render(<Row gutters />);
    expect(container.firstChild).toHaveClass('aui-row-gutters');
  });

  it('should have class name for margins', () => {
    const { container } = render(<Row margins />);
    expect(container.firstChild).toHaveClass('aui-row-margins');
  });
});
