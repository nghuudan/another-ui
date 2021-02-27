import React, { ReactNode } from 'react';

export interface RowProps {
  /** Children to render within the row */
  children?: ReactNode;
  /** Optional class name for the row */
  className?: string;
  /** Enables gutters between columns in the row */
  gutters?: boolean;
  /** Enables margins for the row */
  margins?: boolean;
}

export const Row = ({
  children,
  className,
  gutters,
  margins,
}: RowProps) => {
  const cls = ['aui-row'];
  if (className) cls.push(className);
  if (gutters) cls.push('aui-row-gutters');
  if (margins) cls.push('aui-row-margins');
  return <div className={cls.join(' ')}>{children}</div>;
};

export default Row;
