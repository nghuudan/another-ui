import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface PaneProps {
  /** Children to render in the pane body */
  children?: ReactNode;
  /** Optional class name for the pane body */
  className?: string;
  /** Enables pane to be draggable by the header */
  draggable?: boolean;
  /** Sets the heading for the pane header */
  heading?: ReactNode;
  /** Optional padding for the pane header and body */
  padding?: boolean;
  /** Sets optional theme for the pane */
  theme?: 'dark';
}

export const Pane = ({
  children,
  className,
  draggable,
  heading,
  padding,
  theme,
}: PaneProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const cls = ['aui-pane'];
  const [offset, setOffset] = useState([0, 0]);
  const [position, setPosition] = useState([0, 0]);
  const [isDragging, setDragging] = useState(false);
  const handleMouseDown = () => setDragging(true);
  const handleTouchStart = () => setDragging(true);
  const handleWindowMouseUp = () => setDragging(false);
  const handleWindowTouchEnd = () => setDragging(false);

  if (className) cls.push(className);
  if (draggable) cls.push('aui-pane-draggable');
  if (padding) cls.push('aui-pane-padding');
  if (theme) cls.push(`aui-pane-theme-${theme}`);

  const getClampPosition = (x: number, y: number) => {
    const clampPosition = [x, y];
    const { innerWidth, innerHeight } = window;
    const { offsetWidth, offsetHeight } = ref.current || { offsetWidth: 0, offsetHeight: 0 };
    if (x < 0) clampPosition[0] = 0;
    if (y < 0) clampPosition[1] = 0;
    if (x + offsetWidth > innerWidth) clampPosition[0] = innerWidth - offsetWidth;
    if (y + offsetHeight > innerHeight) clampPosition[1] = innerHeight - offsetHeight;
    return clampPosition;
  };

  const handleWindowMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      setPosition(getClampPosition(event.pageX - offset[0], event.pageY - offset[1]));
    }
  };

  const handleWindowTouchMove = (event: TouchEvent) => {
    if (isDragging && event.touches.length === 1) {
      const { pageX, pageY } = event.touches[0];
      setPosition(getClampPosition(pageX - offset[0], pageY - offset[1]));
    }
  };

  const handleWindowMouseDown = (event: MouseEvent) => {
    if (!isDragging) {
      setOffset([event.pageX - position[0], event.pageY - position[1]]);
    }
  };

  const handleWindowTouchStart = (event: TouchEvent) => {
    if (!isDragging && event.touches.length === 1) {
      const { pageX, pageY } = event.touches[0];
      setOffset([pageX - position[0], pageY - position[1]]);
    }
  };

  useEffect(() => {
    if (draggable) {
      window.addEventListener('mousemove', handleWindowMouseMove, false);
      window.addEventListener('touchmove', handleWindowTouchMove, false);
      window.addEventListener('mousedown', handleWindowMouseDown, false);
      window.addEventListener('touchstart', handleWindowTouchStart, false);
      window.addEventListener('mouseup', handleWindowMouseUp, false);
      window.addEventListener('touchend', handleWindowTouchEnd, false);
    }
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('touchmove', handleWindowTouchMove);
      window.removeEventListener('mousedown', handleWindowMouseDown);
      window.removeEventListener('touchstart', handleWindowTouchStart);
      window.removeEventListener('mouseup', handleWindowMouseUp);
      window.removeEventListener('touchend', handleWindowTouchEnd);
    };
  }, [isDragging, offset, position]);

  const paneHeading = heading ? <div className="aui-pane-heading">{heading}</div> : null;
  const style = {
    left: `${position[0]}px`,
    top: `${position[1]}px`,
  };

  return (
    <div className={cls.join(' ')} ref={ref} style={style}>
      <div className="aui-pane-header">
        {
          draggable ? (
            <button
              aria-hidden="true"
              className="aui-pane-handle"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              tabIndex={-1}
              type="button"
            >
              {heading}
            </button>
          ) : paneHeading
        }
      </div>
      <div className="aui-pane-body">{children}</div>
    </div>
  );
};

export default Pane;
