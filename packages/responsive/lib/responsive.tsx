import React, { ReactNode } from 'react';

export type ResponsiveOption = 'hide' | 'only' | 'show';

export interface ResponsiveProps {
  /** Children to render within the responsive component */
  children?: ReactNode;
  /** Optional class name for the responsive component */
  className?: string;
  /** Option to hide or show the content on small devices */
  sm?: ResponsiveOption;
  /** Option to hide or show the content on medium devices */
  md?: ResponsiveOption;
  /** Option to hide or show the content on large devices */
  lg?: ResponsiveOption;
  /** Option to hide or show the content on extra large devices */
  xl?: ResponsiveOption;
}

export const Responsive = ({
  children,
  className,
  sm,
  md,
  lg,
  xl,
}: ResponsiveProps) => {
  const cls = ['aui-responsive'];
  if (className) cls.push(className);
  if (sm) cls.push(`aui-responsive-sm-${sm}`);
  if (md) cls.push(`aui-responsive-md-${md}`);
  if (lg) cls.push(`aui-responsive-lg-${lg}`);
  if (xl) cls.push(`aui-responsive-xl-${xl}`);
  return <div className={cls.join(' ')}>{children}</div>;
};

export default Responsive;
