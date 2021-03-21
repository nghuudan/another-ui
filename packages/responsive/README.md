# `@another-ui/responsive`

Just another responsive layout for React

## Usage

```js
import React from 'react';
import { Responsive } from '@another-ui/responsive';
import '@another-ui/responsive/dist/responsive.css';

export const Example = () => (
  <div>
    <Responsive className="custom-class" sm="hide">
      <h1>Hide on Small Device or Larger</h1>
    </Responsive>
    <Responsive md="show">
      <h1>Show on Medium Device or Larger</h1>
    </Responsive>
    <Responsive lg="hide">
      <h1>Hide on Large Device or Larger</h1>
    </Responsive>
    <Responsive xl="show">
      <h1>Show on Extra Large Device or Larger</h1>
    </Responsive>
    <Responsive sm="only">
      <h1>Show on Small Device Only</h1>
    </Responsive>
    <Responsive md="only">
      <h1>Show on Medium Device Only</h1>
    </Responsive>
    <Responsive lg="only">
      <h1>Show on Large Device Only</h1>
    </Responsive>
    <Responsive xl="only">
      <h1>Show on Extra Large Device Only</h1>
    </Responsive>
  </div>
);
```
