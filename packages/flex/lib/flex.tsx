import React, { ReactNode } from 'react';

export interface FlexProps {
  /** Sets align items for the flex layout */
  align?: 'baseline' | 'center' | 'end' | 'start' | 'stretch';
  /** Sets basis for the flex component in increments of 5 to 100 */
  basis?: number;
  /** Children to render within the flex component */
  children?: ReactNode;
  /** Optional class name for the flex component */
  className?: string;
  /** Direction to set for the flex layout */
  direction?: 'column' | 'row';
  /** Sets the flex component to grow to fill the flex parent */
  grow?: boolean;
  /** Sets flex component to be an inline flex layout */
  inline?: boolean;
  /** Sets justify content for the flex layout */
  justify?: 'around' | 'between' | 'center' | 'end' | 'evenly' | 'start';
  /** Sets the flex component to shrink to fit the flex parent */
  shrink?: boolean;
  /** Sets the content to wrap as needed */
  wrap?: boolean;
}

export const Flex = ({
  align,
  basis,
  children,
  className,
  direction,
  grow,
  inline,
  justify,
  shrink,
  wrap,
}: FlexProps) => {
  const cls = ['aui-flex'];
  if (className) cls.push(className);
  if (align) cls.push(`aui-flex-align-${align}`);
  if (basis) cls.push(`aui-flex-basis-${basis}`);
  if (direction) cls.push(`aui-flex-direction-${direction}`);
  if (grow) cls.push('aui-flex-grow');
  if (inline) cls.push('aui-flex-inline');
  if (justify) cls.push(`aui-flex-justify-${justify}`);
  if (shrink) cls.push('aui-flex-shrink');
  if (wrap) cls.push('aui-flex-wrap');
  return <div className={cls.join(' ')}>{children}</div>;
};

export default Flex;
