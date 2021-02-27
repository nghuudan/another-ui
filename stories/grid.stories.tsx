import React from 'react';
import { Column, ColumnSize, Row } from '../packages/grid/lib';
import './stories.scss';

export const Default = () => (
  <Row>
    <Column sm={6} md={4} lg={3}>
      <p className="column-example">Column</p>
    </Column>
    <Column sm={6} md={4} lg={3}>
      <p className="column-example">Column</p>
    </Column>
    <Column md={4} lg={6}>
      <p className="column-example">Column</p>
    </Column>
  </Row>
);

export const Gutters = () => (
  <Row gutters>
    <Column sm={6} md={4}>
      <p className="column-example">Column</p>
    </Column>
    <Column sm={6} md={4}>
      <p className="column-example">Column</p>
    </Column>
    <Column md={4}>
      <p className="column-example">Column</p>
    </Column>
  </Row>
);

export const Margins = () => (
  <Row margins>
    <Column sm={4} md={3}>
      <p className="column-example">Column</p>
    </Column>
    <Column sm={4} md={3}>
      <p className="column-example">Column</p>
    </Column>
    <Column sm={4} md={6}>
      <p className="column-example">Column</p>
    </Column>
  </Row>
);

export const GuttersAndMargins = () => (
  <Row gutters margins>
    <Column sm={3} md={2}>
      <p className="column-example">Column</p>
    </Column>
    <Column sm={3} md={2}>
      <p className="column-example">Column</p>
    </Column>
    <Column sm={3} md={4}>
      <p className="column-example">Column</p>
    </Column>
    <Column sm={3} md={4}>
      <p className="column-example">Column</p>
    </Column>
  </Row>
);

export const NestedRows = () => (
  <Row gutters margins>
    <Column sm={6}>
      <p className="column-example">Column</p>
      <Row gutters>
        <Column sm={4}>
          <p className="column-example">Column</p>
        </Column>
        <Column sm={4}>
          <p className="column-example">Column</p>
        </Column>
        <Column sm={4}>
          <p className="column-example">Column</p>
        </Column>
      </Row>
    </Column>
    <Column sm={6}>
      <p className="column-example">Column</p>
      <Row gutters>
        <Column sm={6}>
          <p className="column-example">Column</p>
        </Column>
        <Column sm={6}>
          <p className="column-example">Column</p>
        </Column>
      </Row>
    </Column>
  </Row>
);

export const TryItOut = ({
  columnOne,
  columnTwo,
  columnThree,
  gutters,
  margins,
}: {
  columnOne: ColumnSize,
  columnTwo: ColumnSize,
  columnThree: ColumnSize,
  gutters: boolean,
  margins: boolean,
}) => (
  <Row gutters={gutters} margins={margins}>
    <Column sm={columnOne}>
      <p className="column-example">Column</p>
    </Column>
    <Column sm={columnTwo}>
      <p className="column-example">Column</p>
    </Column>
    <Column sm={columnThree}>
      <p className="column-example">Column</p>
    </Column>
  </Row>
);

TryItOut.args = {
  columnOne: 3,
  columnTwo: 4,
  columnThree: 5,
  gutters: false,
  margins: false,
};

export default {
  title: 'Layout/Grid',
};
