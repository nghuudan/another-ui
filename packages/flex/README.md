# `@another-ui/flex`

Just another flex layout for React

## Usage

```js
import React from 'react';
import { Flex } from '@another-ui/flex';
import '@another-ui/flex/dist/flex.css';

export const Example = () => (
  <Flex
    align="stretch"
    direction="row"
    justify="center"
    wrap
  >
    <Flex
      align="center"
      direction="column"
      grow
      justify="start"
      shrink
    >
      <Flex basis={75} grow>Flex</Flex>
      <Flex basis={25} shrink>Flex</Flex>
      <Flex basis={25} shrink>Flex</Flex>
    </Flex>
  </Flex>
);
```
