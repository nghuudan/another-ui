# `@another-ui/pane`

Just another pane component for React

## Usage

```js
import React from 'react';
import { Pane } from '@another-ui/pane';
import '@another-ui/pane/dist/pane.css';

const initial = {
  x: 32,
  y: 32,
  width: 240,
  height: 240,
};

export const Example = () => (
  <Pane
    className="custom-class"
    draggable
    heading="Example"
    initial={initial}
    padding
    resizable
    snapTo={16}
    theme="dark"
  >
    <p>Demo</p>
  </Pane>
);
```
