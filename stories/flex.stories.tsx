import React from 'react';
import { Flex, FlexProps } from '../packages/flex/lib';
import styles from './stories.module.scss';
import '../packages/flex/lib/flex.scss';

export const Basis = ({ align, direction, justify }: FlexProps) => (
  <Flex
    align={align}
    className={styles['flex-example']}
    direction={direction}
    justify={justify}
  >
    <Flex basis={50} className={styles['flex-title']}>50%</Flex>
    <Flex basis={50} className={styles['flex-title']}>50%</Flex>
  </Flex>
);

Basis.args = {
  align: 'stretch',
  direction: 'row',
  justify: 'start',
};

export const Grow = ({ align, direction, justify }: FlexProps) => (
  <Flex
    align={align}
    className={styles['flex-example']}
    direction={direction}
    justify={justify}
  >
    <Flex basis={50} className={styles['flex-title']} grow>50% and Grow</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
  </Flex>
);

Grow.args = {
  align: 'stretch',
  direction: 'row',
  justify: 'start',
};

export const Inline = ({ align, direction, justify }: FlexProps) => (
  <Flex
    align={align}
    className={styles['flex-example']}
    direction={direction}
    inline
    justify={justify}
  >
    <Flex basis={50} className={styles['flex-title']}>50%</Flex>
    <Flex basis={50} className={styles['flex-title']}>50%</Flex>
  </Flex>
);

Inline.args = {
  align: 'stretch',
  direction: 'row',
  justify: 'start',
};

export const Shrink = ({ align, direction, justify }: FlexProps) => (
  <Flex
    align={align}
    className={styles['flex-example']}
    direction={direction}
    justify={justify}
  >
    <Flex basis={100} className={styles['flex-title']} shrink>100% and Shrink</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
  </Flex>
);

Shrink.args = {
  align: 'stretch',
  direction: 'row',
  justify: 'start',
};

export const Wrap = ({ align, direction, justify }: FlexProps) => (
  <Flex
    align={align}
    className={styles['flex-example']}
    direction={direction}
    justify={justify}
    wrap
  >
    <Flex basis={100} className={styles['flex-title']}>100%</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
  </Flex>
);

Wrap.args = {
  align: 'stretch',
  direction: 'row',
  justify: 'start',
};

export const TryItOut = ({
  align,
  direction,
  inline,
  justify,
}: FlexProps) => (
  <Flex
    align={align}
    className={styles['flex-example']}
    direction={direction}
    inline={inline}
    justify={justify}
  >
    <Flex className={styles['flex-title']}>Flex</Flex>
    <Flex className={styles['flex-title']}>Flex</Flex>
    <Flex className={styles['flex-title']}>Flex</Flex>
  </Flex>
);

TryItOut.args = {
  align: 'start',
  direction: 'column',
  inline: false,
  justify: 'start',
};

export default {
  title: 'Layout/Flex',
  argTypes: {
    direction: {
      control: {
        type: 'inline-radio',
        options: ['column', 'row'],
      },
    },
    align: {
      control: {
        type: 'inline-radio',
        options: ['start', 'center', 'end', 'stretch', 'baseline'],
      },
    },
    justify: {
      control: {
        type: 'inline-radio',
        options: ['start', 'center', 'end', 'around', 'between', 'evenly'],
      },
    },
  },
};
