import React from 'react';
import { Responsive } from '../packages/responsive/lib';
import styles from './stories.module.scss';
import '../packages/responsive/lib/responsive.scss';

export const HideAndShow = () => (
  <>
    <Responsive sm="show" md="hide" lg="show" xl="hide">
      <h1 className={styles['responsive-title']}>Responsive</h1>
    </Responsive>
    <Responsive sm="only">
      <h2 className={styles['responsive-option']}>Show on Small Device</h2>
    </Responsive>
    <Responsive md="only">
      <h2 className={styles['responsive-option']}>Hide on Medium Device</h2>
    </Responsive>
    <Responsive lg="only">
      <h2 className={styles['responsive-option']}>Show on Large Device</h2>
    </Responsive>
    <Responsive xl="only">
      <h2 className={styles['responsive-option']}>Hide on Extra Large Device</h2>
    </Responsive>
  </>
);

export const HideAndShowInline = () => (
  <>
    <Responsive inline sm="show" md="hide" lg="show" xl="hide">
      <span className={styles['responsive-title']}>Responsive Inline </span>
    </Responsive>
    <Responsive inline sm="only">
      <span className={styles['responsive-option']}>Show on Small Device</span>
    </Responsive>
    <Responsive inline md="only">
      <span className={styles['responsive-option']}>Hide on Medium Device</span>
    </Responsive>
    <Responsive inline lg="only">
      <span className={styles['responsive-option']}>Show on Large Device</span>
    </Responsive>
    <Responsive inline xl="only">
      <span className={styles['responsive-option']}>Hide on Extra Large Device</span>
    </Responsive>
  </>
);

export const ShowOnly = () => (
  <>
    <Responsive sm="only">
      <h1 className={styles['responsive-title']}>Small Device Only</h1>
    </Responsive>
    <Responsive md="only">
      <h1 className={styles['responsive-title']}>Medium Device Only</h1>
    </Responsive>
    <Responsive lg="only">
      <h1 className={styles['responsive-title']}>Large Device Only</h1>
    </Responsive>
    <Responsive xl="only">
      <h1 className={styles['responsive-title']}>Extra Large Device Only</h1>
    </Responsive>
  </>
);

export default {
  title: 'Layout/Responsive',
};
