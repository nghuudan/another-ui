# `@another-ui/pane`

Just another pane component for React

## Usage

```js
import React from 'react';
import { Pane } from '@another-ui/pane';
import '@another-ui/pane/dist/pane.css';

export const Example = () => (
  <Pane draggable heading="Example" padding resizable snapTo={8} theme="dark">
    <p>Demo</p>
  </Pane>
);
```
