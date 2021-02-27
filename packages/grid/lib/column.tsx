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
  /** Sets the offset before the column for small devices */
  smOffset?: ColumnSize;
  /** Sets the offset before the column for medium devices */
  mdOffset?: ColumnSize;
  /** Sets the offset before the column for large devices */
  lgOffset?: ColumnSize;
  /** Sets the offset before the column for extra large devices */
  xlOffset?: ColumnSize;
}

export const Column = ({
  children,
  className,
  sm,
  md,
  lg,
  xl,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
}: ColumnProps) => {
  const cls = ['aui-column'];
  if (className) cls.push(className);
  if (sm) cls.push(`aui-col-sm-${sm}`);
  if (md) cls.push(`aui-col-md-${md}`);
  if (lg) cls.push(`aui-col-lg-${lg}`);
  if (xl) cls.push(`aui-col-xl-${xl}`);
  if (smOffset) cls.push(`aui-col-sm-offset-${smOffset}`);
  if (mdOffset) cls.push(`aui-col-md-offset-${mdOffset}`);
  if (lgOffset) cls.push(`aui-col-lg-offset-${lgOffset}`);
  if (xlOffset) cls.push(`aui-col-xl-offset-${xlOffset}`);
  return <div className={cls.join(' ')}>{children}</div>;
};

export default Column;
