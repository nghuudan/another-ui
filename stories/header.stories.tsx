import React from 'react';
import { Header } from '../packages/header/lib';
import styles from './stories.module.scss';
import '../packages/header/lib/header.scss';

export const Default = () => (
  <Header>
    <h1 className={styles['header-title']}>Default</h1>
  </Header>
);

export const Fixed = () => (
  <>
    <Header fixed>
      <h1 className={styles['header-title']}>Fixed</h1>
    </Header>
    <p style={{ height: '2000px' }}>DEMO</p>
  </>
);

export const Padding = () => (
  <Header padding>
    <h1 className={styles['header-title']}>Padding</h1>
  </Header>
);

export const FixedAndPadding = () => (
  <>
    <Header fixed padding>
      <h1 className={styles['header-title']}>Fixed and Padding</h1>
    </Header>
    <p style={{ height: '2000px' }}>DEMO</p>
  </>
);

export const Sticky = () => (
  <>
    <Header padding sticky>
      <h1 className={styles['header-title']}>Sticky</h1>
    </Header>
    <p style={{ height: '2000px' }}>DEMO</p>
  </>
);

export const DarkTheme = () => (
  <>
    <Header padding sticky theme="dark">
      <h1 className={styles['header-title']}>Dark Theme</h1>
    </Header>
    <p style={{ height: '2000px' }}>DEMO</p>
  </>
);

export default {
  title: 'Containers/Header',
};
