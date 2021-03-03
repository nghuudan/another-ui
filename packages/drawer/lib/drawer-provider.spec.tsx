import React, { useEffect } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { DrawerProvider, useDrawer } from './drawer-provider';

describe('DrawerProvider', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <DrawerProvider>
        <p data-testid="test-child" />
      </DrawerProvider>,
    );
    expect(getByTestId('test-child')).toBeDefined();
  });

  it('should render component when show() is called', () => {
    const ComponentMock = () => <p data-testid="test-component" />;
    const OpenMock = () => {
      const { open } = useDrawer();
      useEffect(() => {
        open('ComponentMock');
      }, []);
      return null;
    };
    const { getByTestId } = render(
      <DrawerProvider components={{ ComponentMock }}>
        <OpenMock />
      </DrawerProvider>,
    );
    expect(getByTestId('test-component')).toBeDefined();
  });

  it('should not render component when close() is called', async () => {
    const ComponentMock = () => {
      const { close } = useDrawer();
      return <button data-testid="close-button" onClick={() => close()} type="button">Close</button>;
    };
    const OpenMock = () => {
      const { open } = useDrawer();
      useEffect(() => {
        open('ComponentMock');
      }, []);
      return null;
    };
    const { findByTestId } = render(
      <DrawerProvider components={{ ComponentMock }}>
        <OpenMock />
      </DrawerProvider>,
    );
    let openButton: HTMLElement | null = await findByTestId('close-button');
    if (openButton) fireEvent.click(openButton);
    try {
      openButton = await findByTestId('close-button');
    } catch {
      openButton = null;
    }
    expect(openButton).toBeNull();
  });
});
