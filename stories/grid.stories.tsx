import React from 'react';
import { Column, ColumnSize, Row } from '../packages/grid/lib';
import styles from './stories.module.scss';
import '../packages/grid/lib/grid.scss';

export const Default = () => (
  <Row>
    <Column sm={6} md={4} lg={3}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={6} md={4} lg={3}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column md={4} lg={6}>
      <p className={styles['column-example']}>Column</p>
    </Column>
  </Row>
);

export const Gutters = () => (
  <Row gutters>
    <Column sm={6} md={4}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={6} md={4}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column md={4}>
      <p className={styles['column-example']}>Column</p>
    </Column>
  </Row>
);

export const Margins = () => (
  <Row margins>
    <Column sm={4} md={3}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={4} md={3}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={4} md={6}>
      <p className={styles['column-example']}>Column</p>
    </Column>
  </Row>
);

export const GuttersAndMargins = () => (
  <Row gutters margins>
    <Column sm={3} md={2}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={3} md={2}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={3} md={4}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={3} md={4}>
      <p className={styles['column-example']}>Column</p>
    </Column>
  </Row>
);

export const NestedRows = () => (
  <Row gutters margins>
    <Column sm={6}>
      <p className={styles['column-example']}>Column</p>
      <Row gutters>
        <Column sm={4}>
          <p className={styles['column-example']}>Column</p>
        </Column>
        <Column sm={4}>
          <p className={styles['column-example']}>Column</p>
        </Column>
        <Column sm={4}>
          <p className={styles['column-example']}>Column</p>
        </Column>
      </Row>
    </Column>
    <Column sm={6}>
      <p className={styles['column-example']}>Column</p>
      <Row gutters>
        <Column sm={6}>
          <p className={styles['column-example']}>Column</p>
        </Column>
        <Column sm={6}>
          <p className={styles['column-example']}>Column</p>
        </Column>
      </Row>
    </Column>
  </Row>
);

export const OffsetColumns = () => (
  <Row gutters margins>
    <Column sm={6}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={6}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={4} smOffset={4}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={4}>
      <p className={styles['column-example']}>Column</p>
    </Column>
  </Row>
);

export const TryItOut = ({
  columnOne,
  columnTwo,
  columnThree,
  columnOneOffset,
  columnTwoOffset,
  columnThreeOffset,
  gutters,
  margins,
}: {
  columnOne: ColumnSize,
  columnTwo: ColumnSize,
  columnThree: ColumnSize,
  columnOneOffset: ColumnSize,
  columnTwoOffset: ColumnSize,
  columnThreeOffset: ColumnSize,
  gutters: boolean,
  margins: boolean,
}) => (
  <Row gutters={gutters} margins={margins}>
    <Column sm={columnOne} smOffset={columnOneOffset}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={columnTwo} smOffset={columnTwoOffset}>
      <p className={styles['column-example']}>Column</p>
    </Column>
    <Column sm={columnThree} smOffset={columnThreeOffset}>
      <p className={styles['column-example']}>Column</p>
    </Column>
  </Row>
);

TryItOut.args = {
  columnOne: 6,
  columnTwo: 6,
  columnThree: 8,
  columnOneOffset: 0,
  columnTwoOffset: 0,
  columnThreeOffset: 4,
  gutters: false,
  margins: false,
};

export default {
  title: 'Layout/Grid',
};
