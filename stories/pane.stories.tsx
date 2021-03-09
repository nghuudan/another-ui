import React from 'react';
import { Pane, PaneProps } from '../packages/pane/lib';
import './stories.module.scss';
import '../packages/pane/lib/pane.scss';

export const Default = () => (
  <Pane heading="Default">
    Content
  </Pane>
);

export const Padding = () => (
  <Pane heading="Padding" padding>
    Content
  </Pane>
);

export const NoHeading = () => (
  <Pane padding>
    No Heading
  </Pane>
);

export const Draggable = () => (
  <Pane heading="Draggable" draggable padding>
    Content
  </Pane>
);

export const Resizable = () => (
  <Pane heading="Resizable" padding resizable>
    Content
  </Pane>
);

export const DraggableAndResizable = () => (
  <Pane
    heading="Draggable and Resizable"
    draggable
    resizable
    padding
  >
    Content
  </Pane>
);

export const DraggableAndSnapTo = () => (
  <Pane
    heading="Draggable and Snap To (32px)"
    draggable
    padding
    snapTo={32}
  >
    Content
  </Pane>
);

export const DarkTheme = () => (
  <Pane heading="Dark Theme" draggable padding theme="dark">
    Content
  </Pane>
);

export const TryItOut = ({
  children,
  draggable,
  heading,
  padding,
  resizable,
  snapTo,
  theme,
}: PaneProps) => (
  <Pane
    draggable={draggable}
    heading={heading}
    padding={padding}
    resizable={resizable}
    snapTo={snapTo}
    theme={theme}
  >
    {children}
  </Pane>
);

TryItOut.args = {
  children: 'Content',
  draggable: true,
  heading: 'Try It Out',
  padding: true,
  resizable: true,
  snapTo: 32,
  theme: 'dark',
};

export default {
  title: 'Containers/Pane',
};
