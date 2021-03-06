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
  theme,
}: PaneProps) => (
  <Pane
    draggable={draggable}
    heading={heading}
    padding={padding}
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
  theme: 'dark',
};

export default {
  title: 'Containers/Pane',
};
