import React, { ReactNode } from 'react';

export type ResponsiveOption = 'hide' | 'only' | 'show';

export interface ResponsiveProps {
  /** Children to render within the responsive component */
  children?: ReactNode;
  /** Optional class name for the responsive component */
  className?: string;
  /** Sets responsive component to be inline element */
  inline?: boolean;
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
  inline,
  sm,
  md,
  lg,
  xl,
}: ResponsiveProps) => {
  const cls = ['aui-responsive'];
  if (className) cls.push(className);
  if (inline) cls.push('aui-responsive-inline');
  if (sm) cls.push(`aui-responsive-sm-${sm}`);
  if (md) cls.push(`aui-responsive-md-${md}`);
  if (lg) cls.push(`aui-responsive-lg-${lg}`);
  if (xl) cls.push(`aui-responsive-xl-${xl}`);
  if (inline) return <span className={cls.join(' ')}>{children}</span>;
  return <div className={cls.join(' ')}>{children}</div>;
};

export default Responsive;
