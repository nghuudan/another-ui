import React, { useEffect } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { DialogProvider, useDialog } from './dialog-provider';

describe('DialogProvider', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <DialogProvider>
        <p data-testid="test-child" />
      </DialogProvider>,
    );
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should render component when show() is called', () => {
    const ComponentMock = () => <p data-testid="test-component" />;
    const ShowMock = () => {
      const { show } = useDialog();
      useEffect(() => {
        show('ComponentMock');
      }, []);
      return null;
    };
    const { getByTestId } = render(
      <DialogProvider components={{ ComponentMock }}>
        <ShowMock />
      </DialogProvider>,
    );
    expect(getByTestId('test-component')).toBeDefined();
  });

  it('should not render component when hide() is called', async () => {
    const ComponentMock = () => {
      const { hide } = useDialog();
      return <button data-testid="hide-button" onClick={() => hide()} type="button">Hide</button>;
    };
    const ShowMock = () => {
      const { show } = useDialog();
      useEffect(() => {
        show('ComponentMock');
      }, []);
      return null;
    };
    const { findByTestId } = render(
      <DialogProvider components={{ ComponentMock }}>
        <ShowMock />
      </DialogProvider>,
    );
    let hideButton: HTMLElement | null = await findByTestId('hide-button');
    if (hideButton) fireEvent.click(hideButton);
    try {
      hideButton = await findByTestId('hide-button');
    } catch {
      hideButton = null;
    }
    expect(hideButton).toBeNull();
  });
});
