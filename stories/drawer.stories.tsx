import React from 'react';
import { Drawer, DrawerProvider, useDrawer } from '../packages/drawer/lib';
import styles from './stories.module.scss';
import '../packages/drawer/lib/drawer.scss';

export const Default = () => {
  const { close } = useDrawer();
  return (
    <Drawer>
      <button
        className={styles['close-drawer-button']}
        onClick={() => close()}
        type="button"
      >
        Close
      </button>
      Default
    </Drawer>
  );
};

export const Padding = () => {
  const { close } = useDrawer();
  return (
    <Drawer padding>
      <button
        className={styles['close-drawer-button']}
        onClick={() => close()}
        type="button"
      >
        Close
      </button>
      Padding
    </Drawer>
  );
};

export const FromLeft = () => {
  const { close } = useDrawer();
  return (
    <Drawer direction="left" padding>
      <button
        className={styles['close-drawer-button']}
        onClick={() => close()}
        type="button"
      >
        Close
      </button>
      Left
    </Drawer>
  );
};

export const FromRight = () => {
  const { close } = useDrawer();
  return (
    <Drawer direction="right" padding>
      <button
        className={styles['close-drawer-button']}
        onClick={() => close()}
        type="button"
      >
        Close
      </button>
      Right
    </Drawer>
  );
};

export const FromTop = () => {
  const { close } = useDrawer();
  return (
    <Drawer direction="top" padding>
      <button
        className={styles['close-drawer-button']}
        onClick={() => close()}
        type="button"
      >
        Close
      </button>
      Top
    </Drawer>
  );
};

export const DarkTheme = () => {
  const { close } = useDrawer();
  return (
    <Drawer padding theme="dark">
      <button
        className={styles['close-drawer-button']}
        onClick={() => close()}
        type="button"
      >
        Close
      </button>
      Dark Theme
    </Drawer>
  );
};

const DrawerController = () => {
  const { open } = useDrawer();
  return (
    <>
      <button
        className={styles['open-drawer-button']}
        onClick={() => open('Default')}
        type="button"
      >
        Open with Default
      </button>
      <button
        className={styles['open-drawer-button']}
        onClick={() => open('Padding')}
        type="button"
      >
        Open with Padding
      </button>
      <button
        className={styles['open-drawer-button']}
        onClick={() => open('FromLeft')}
        type="button"
      >
        Open from Left
      </button>
      <button
        className={styles['open-drawer-button']}
        onClick={() => open('FromRight')}
        type="button"
      >
        Open from Right
      </button>
      <button
        className={styles['open-drawer-button']}
        onClick={() => open('FromTop')}
        type="button"
      >
        Open from Top
      </button>
      <button
        className={styles['open-drawer-button']}
        onClick={() => open('DarkTheme')}
        type="button"
      >
        Open with Dark Theme
      </button>
    </>
  );
};

export const TryItOut = () => (
  <DrawerProvider components={{
    Default,
    Padding,
    FromLeft,
    FromRight,
    FromTop,
    DarkTheme,
  }}
  >
    <DrawerController />
  </DrawerProvider>
);

export default {
  title: 'Containers/Drawer',
};
