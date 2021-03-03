# `@another-ui/drawer`

Just another drawer component for React

## Usage

```js
import React from 'react';
import { Drawer, DrawerProvider, useDrawer } from '@another-ui/drawer';
import '@another-ui/drawer/dist/drawer.css';

const DemoDrawer = () => {
  const { close } = useDrawer();
  return (
    <Drawer className="custom-class" direction="left" padding theme="dark">
      Demo
      <button onClick={() => close()} type="button">Close</button>
    </Drawer>
  );
};

const OpenDrawerButton = () => {
  const { open } = useDrawer();
  return <button onClick={() => open('DemoDrawer')} type="button">Open</button>;
};

export const Example = () => (
  <DrawerProvider components={{ DemoDrawer }}>
    <OpenDrawerButton />
  </DrawerProvider>
);
```
