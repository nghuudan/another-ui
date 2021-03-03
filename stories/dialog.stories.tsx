import React from 'react';
import {
  Dialog,
  DialogProvider,
  useDialog,
} from '../packages/dialog/lib';
import styles from './stories.module.scss';
import '../packages/dialog/lib/dialog.scss';

export const Default = () => {
  const { hide } = useDialog();
  return (
    <Dialog>
      <h1 className={styles['dialog-title']}>Default</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const Overlay = () => {
  const { hide } = useDialog();
  return (
    <Dialog overlay>
      <h1 className={styles['dialog-title']}>Overlay</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const Padding = () => {
  const { hide } = useDialog();
  return (
    <Dialog padding>
      <h1 className={styles['dialog-title']}>Padding</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const OverlayAndPadding = () => {
  const { hide } = useDialog();
  return (
    <Dialog overlay padding>
      <h1 className={styles['dialog-title']}>Overlay and Padding</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const HandleClickOverlay = () => {
  const { hide } = useDialog();
  return (
    <Dialog onClickOverlay={() => hide()} overlay padding>
      <h1 className={styles['dialog-title']}>Handle Click Overlay</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const ScrollingAllowed = () => {
  const { hide } = useDialog();
  return (
    <Dialog
      onClickOverlay={() => hide()}
      overlay
      padding
      scrolling
    >
      <h1 className={styles['dialog-title']}>Scrolling Allowed</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const DarkTheme = () => {
  const { hide } = useDialog();
  return (
    <Dialog
      onClickOverlay={() => hide()}
      overlay
      padding
      theme="dark"
    >
      <h1 className={styles['dialog-title']}>Dark Theme</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const DialogController = () => {
  const { show } = useDialog();
  return (
    <>
      <button
        className={styles['show-dialog-button']}
        onClick={() => show('Default')}
        type="button"
      >
        Show with Default
      </button>
      <button
        className={styles['show-dialog-button']}
        onClick={() => show('Overlay')}
        type="button"
      >
        Show with Overlay
      </button>
      <button
        className={styles['show-dialog-button']}
        onClick={() => show('Padding')}
        type="button"
      >
        Show with Padding
      </button>
      <button
        className={styles['show-dialog-button']}
        onClick={() => show('OverlayAndPadding')}
        type="button"
      >
        Show with Overlay and Padding
      </button>
      <button
        className={styles['show-dialog-button']}
        onClick={() => show('HandleClickOverlay')}
        type="button"
      >
        Show with Handle Click Overlay
      </button>
      <button
        className={styles['show-dialog-button']}
        onClick={() => show('ScrollingAllowed')}
        type="button"
      >
        Show with Scrolling Allowed
      </button>
      <button
        className={styles['show-dialog-button']}
        onClick={() => show('DarkTheme')}
        type="button"
      >
        Show with Dark Theme
      </button>
    </>
  );
};

export const TryItOut = () => (
  <DialogProvider components={{
    Default,
    Overlay,
    Padding,
    OverlayAndPadding,
    HandleClickOverlay,
    ScrollingAllowed,
    DarkTheme,
  }}
  >
    <h1 className={styles['dialog-title']}>Dialog</h1>
    <DialogController />
    <p style={{ height: '2000px' }}>DEMO</p>
  </DialogProvider>
);

export default {
  title: 'Containers/Dialog',
};
