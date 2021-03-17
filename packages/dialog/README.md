# `@another-ui/dialog`

Just another dialog component for React

## Usage

```js
import React from 'react';
import { Dialog, DialogProvider, useDialog } from '@another-ui/dialog';
import '@another-ui/dialog/dist/dialog.css';

const DemoDialog = () => {
  const { hide } = useDialog();
  return (
    <Dialog
      className="custom-class"
      onClickOverlay={() => hide()}
      overlay
      padding
      scrolling
      theme="dark"
    >
      <h1>Demo</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

const ShowDialogButton = () => {
  const { show } = useDialog();
  return <button onClick={() => show('DemoDialog')} type="button">Show</button>;
};

export const Example = () => (
  <DialogProvider components={{ DemoDialog }}>
    <ShowDialogButton />
  </DialogProvider>
);
```
