import React from 'react';
import { Flex, FlexProps } from '../packages/flex/lib';
import styles from './stories.module.scss';
import '../packages/flex/lib/flex.scss';

export const Basis = () => (
  <Flex className={styles['flex-example']} direction="row">
    <Flex basis={50} className={styles['flex-title']}>50%</Flex>
    <Flex basis={50} className={styles['flex-title']}>50%</Flex>
  </Flex>
);

export const Grow = () => (
  <Flex className={styles['flex-example']} direction="row">
    <Flex basis={50} className={styles['flex-title']} grow>50% and Grow</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
  </Flex>
);

export const Shrink = () => (
  <Flex className={styles['flex-example']} direction="row">
    <Flex basis={100} className={styles['flex-title']} shrink>100% and Shrink</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
  </Flex>
);

export const Wrap = () => (
  <Flex className={styles['flex-example']} direction="row" wrap>
    <Flex basis={100} className={styles['flex-title']}>100%</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
    <Flex basis={25} className={styles['flex-title']}>25%</Flex>
  </Flex>
);

export const TryItOut = ({
  align,
  direction,
  justify,
}: FlexProps) => (
  <Flex
    align={align}
    className={styles['flex-example']}
    direction={direction}
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
