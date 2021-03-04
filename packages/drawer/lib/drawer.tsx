import React, { ReactNode, useEffect, useState } from 'react';

export interface DrawerProps {
  /** Children to render within the drawer */
  children?: ReactNode;
  /** Optional class name for the drawer */
  className?: string;
  /**
   * Sets the direction from where the drawer opens
   * @default 'bottom'
   */
  direction?: 'bottom' | 'left' | 'right' | 'top';
  /** Optional padding for the drawer */
  padding?: boolean;
  /** Optional theme for the drawer */
  theme?: 'dark';
}

export const Drawer = ({
  children,
  className,
  direction = 'bottom',
  padding,
  theme,
}: DrawerProps) => {
  const [isOpen, setOpen] = useState(false);
  const cls = ['aui-drawer', `aui-drawer-direction-${direction}`];

  if (className) cls.push(className);
  if (padding) cls.push('aui-drawer-padding');
  if (theme) cls.push('aui-drawer-theme-dark');
  if (isOpen) cls.push('aui-drawer-open');

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setOpen(true);
    }, 50);
    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={cls.join(' ')}>
      {children}
    </div>
  );
};

export default Drawer;
