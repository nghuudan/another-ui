import React, {
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react';

export interface DialogProps {
  /** Children to render within the dialog */
  children?: ReactNode;
  /** Optional class name for the dialog */
  className?: string;
  /** Optional handler for click overlay event */
  onClickOverlay?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Optional overlay for the dialog */
  overlay?: boolean;
  /** Optional padding for the dialog body */
  padding?: boolean;
  /** Optional scrolling allowed when the dialog is showing */
  scrolling?: boolean;
  /** Optional theme for the dialog body */
  theme?: 'dark';
}

export const Dialog = ({
  children,
  className,
  onClickOverlay,
  overlay,
  padding,
  scrolling,
  theme,
}: DialogProps) => {
  const [isShowing, setShowing] = useState(false);
  const cls = ['aui-dialog'];
  const bodyCls = ['aui-dialog-body'];

  if (className) cls.push(className);
  if (isShowing) cls.push('aui-dialog-showing');
  if (padding) bodyCls.push('aui-dialog-padding');
  if (theme) bodyCls.push(`aui-dialog-theme-${theme}`);

  useEffect(() => {
    const timeout = setTimeout(() => setShowing(true), 50);
    const { style } = global.document.body;
    if (!scrolling) style.overflow = 'hidden';
    return () => {
      if (!scrolling) style.overflow = 'auto';
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={cls.join(' ')}>
      {
        overlay
          ? (
            <button
              aria-hidden="true"
              className="aui-dialog-overlay"
              onClick={onClickOverlay}
              tabIndex={-1}
              type="button"
            />
          )
          : null
      }
      <div className={bodyCls.join(' ')}>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
