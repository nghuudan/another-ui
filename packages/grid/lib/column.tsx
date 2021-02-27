import React, { ReactNode } from 'react';

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnProps {
  /** Children to render within the column */
  children?: ReactNode;
  /** Optional class name for the column */
  className?: string;
  /** Sets the column size for small devices */
  sm?: ColumnSize;
  /** Sets the column size for medium devices */
  md?: ColumnSize;
  /** Sets the column size for large devices */
  lg?: ColumnSize;
  /** Sets the column size for extra large devices */
  xl?: ColumnSize;
}

export const Column = ({
  children,
  className,
  sm,
  md,
  lg,
  xl,
}: ColumnProps) => {
  const cls = ['aui-column'];
  if (className) cls.push(className);
  if (sm) cls.push(`aui-col-sm-${sm}`);
  if (md) cls.push(`aui-col-md-${md}`);
  if (lg) cls.push(`aui-col-lg-${lg}`);
  if (xl) cls.push(`aui-col-xl-${xl}`);
  return <div className={cls.join(' ')}>{children}</div>;
};

export default Column;
