import React from 'react';
import {
  Dialog,
  DialogProvider,
  useDialog,
} from '../packages/dialog/lib';
import './stories.scss';

export const Default = () => {
  const { hide } = useDialog();
  return (
    <Dialog>
      <h1 className="dialog-title">Default</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const Overlay = () => {
  const { hide } = useDialog();
  return (
    <Dialog overlay>
      <h1 className="dialog-title">Overlay</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const Padding = () => {
  const { hide } = useDialog();
  return (
    <Dialog padding>
      <h1 className="dialog-title">Padding</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const OverlayAndPadding = () => {
  const { hide } = useDialog();
  return (
    <Dialog overlay padding>
      <h1 className="dialog-title">Overlay and Padding</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const HandleClickOverlay = () => {
  const { hide } = useDialog();
  return (
    <Dialog onClickOverlay={() => hide()} overlay padding>
      <h1 className="dialog-title">Handle Click Overlay</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const ScrollingAllowed = () => {
  const { hide } = useDialog();
  return (
    <Dialog onClickOverlay={() => hide()} overlay padding scrolling>
      <h1 className="dialog-title">Scrolling Allowed</h1>
      <button onClick={() => hide()} type="button">Hide</button>
    </Dialog>
  );
};

export const ShowDialogController = () => {
  const { show } = useDialog();
  return (
    <>
      <button className="show-dialog-button" onClick={() => show('Default')} type="button">
        Show with Default
      </button>
      <button className="show-dialog-button" onClick={() => show('Overlay')} type="button">
        Show with Overlay
      </button>
      <button className="show-dialog-button" onClick={() => show('Padding')} type="button">
        Show with Padding
      </button>
      <button className="show-dialog-button" onClick={() => show('OverlayAndPadding')} type="button">
        Show with Overlay and Padding
      </button>
      <button className="show-dialog-button" onClick={() => show('HandleClickOverlay')} type="button">
        Show with Handle Click Overlay
      </button>
      <button className="show-dialog-button" onClick={() => show('ScrollingAllowed')} type="button">
        Show with Scrolling Allowed
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
  }}
  >
    <h1 className="dialog-title">Dialog</h1>
    <ShowDialogController />
    <p style={{ height: '2000px' }}>DEMO</p>
  </DialogProvider>
);

export default {
  title: 'Containers/Dialog',
};
