# `@another-ui/grid`

Just another component for grid layouts

## Usage

```js
import React from 'react';
import { Column, Row } from '@another-ui/grid';
import '@another-ui/grid/dist/grid.css';

export const Example = () => (
  <Row gutters margins>
    <Column sm={6} md={4} lg={3} xl={2}>
      <p>Column</p>
    </Column>
    <Column sm={6} md={4} lg={3} xl={2}>
      <p>Column</p>
    </Column>
    <Column md={4} lg={6} xl={8}>
      <p>Column</p>
      <Row gutters>
        <Column sm={6}>
          <p>Nested Column</p>
        </Column>
        <Column sm={6}>
          <p>Nested Column</p>
        </Column>
      </Row>
    </Column>
  </Row>
);
```
