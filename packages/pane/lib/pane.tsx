import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface PaneProps {
  /** Children to render in the pane body */
  children?: ReactNode;
  /** Optional class name for the pane */
  className?: string;
  /** Enables pane to be draggable by the header */
  draggable?: boolean;
  /** Sets the heading for the pane header */
  heading?: ReactNode;
  /** Sets the initial position and size of the pane */
  initial?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  /** Optional padding for the pane header and body */
  padding?: boolean;
  /** Enables pane to be resizable by the lower-right corner */
  resizable?: boolean;
  /** Optional snap position size when draggable */
  snapTo?: number;
  /** Sets optional theme for the pane */
  theme?: 'dark';
}

export const Pane = ({
  children,
  className,
  draggable,
  heading,
  initial,
  padding,
  resizable,
  snapTo,
  theme,
}: PaneProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const cls = ['aui-pane'];
  const [offset, setOffset] = useState([0, 0]);
  const [position, setPosition] = useState([
    initial?.x || 0,
    initial?.y || 0,
  ]);
  const [size, setSize] = useState([
    initial?.width || ref.current?.offsetWidth,
    initial?.height || ref.current?.offsetHeight,
  ]);
  const [isCollapsed, setCollapsed] = useState(false);
  const [isDragging, setDragging] = useState(false);
  const [isResizing, setResizing] = useState(false);
  const handleDoubleClick = () => setCollapsed(!isCollapsed);
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (event.touches.length > 1) {
      setCollapsed(!isCollapsed);
    }
  };
  const handleMouseDown = () => setDragging(true);
  const handleMouseDownResize = () => setResizing(true);
  const handleTouchStart = () => setDragging(true);
  const handleTouchStartResize = () => setResizing(true);
  const handleWindowMouseUp = () => {
    setResizing(false);
    setDragging(false);
  };
  const handleWindowTouchEnd = () => {
    setResizing(false);
    setDragging(false);
  };

  if (className) cls.push(className);
  if (isCollapsed) cls.push('aui-pane-collapsed');
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
    if (snapTo) {
      clampPosition[0] = Math.round(clampPosition[0] / snapTo) * snapTo;
      clampPosition[1] = Math.round(clampPosition[1] / snapTo) * snapTo;
    }
    return clampPosition;
  };

  const getClampSize = (x: number, y: number) => {
    const { innerWidth, innerHeight } = window;
    const { offsetLeft, offsetTop } = ref.current || { offsetLeft: 0, offsetTop: 0 };
    let width = x - offsetLeft + 8;
    let height = y - offsetTop + 8;
    if (width + offsetLeft > innerWidth) width = innerWidth - offsetLeft;
    if (height + offsetTop > innerHeight) height = innerHeight - offsetTop;
    if (snapTo) {
      width = Math.round(width / snapTo) * snapTo;
      height = Math.round(height / snapTo) * snapTo;
    }
    return [
      Math.max(48, width),
      Math.max(48, height),
    ];
  };

  const handleWindowMouseMove = (event: MouseEvent) => {
    const { pageX, pageY } = event;
    if (isDragging && !isResizing) {
      setPosition(getClampPosition(pageX - offset[0], pageY - offset[1]));
    } else if (!isDragging && isResizing) {
      setSize(getClampSize(pageX, pageY));
    }
  };

  const handleWindowTouchMove = (event: TouchEvent) => {
    const { pageX, pageY } = event.touches[0];
    if (isDragging && !isResizing && event.touches.length === 1) {
      setPosition(getClampPosition(pageX - offset[0], pageY - offset[1]));
    } else if (!isDragging && isResizing && event.touches.length === 1) {
      setSize(getClampSize(pageX, pageY));
    }
  };

  const handleWindowMouseDown = (event: MouseEvent) => {
    if (!isDragging && !isResizing) {
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
    if (draggable || resizable) {
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
  }, [isDragging, isResizing, offset, position]);

  const paneHeading = heading ? <div className="aui-pane-heading">{heading}</div> : null;
  const style = {
    left: `${position[0]}px`,
    top: `${position[1]}px`,
    width: size[0] ? `${size[0]}px` : 'auto',
    height: !isCollapsed && size[1] ? `${size[1]}px` : 'auto',
  };

  return (
    <div className={cls.join(' ')} ref={ref} style={style}>
      <div className="aui-pane-header">
        {
          draggable ? (
            <button
              aria-hidden="true"
              className="aui-pane-handle"
              onDoubleClick={handleDoubleClick}
              onMouseDown={handleMouseDown}
              onTouchEnd={handleTouchEnd}
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
      {
        resizable ? (
          <button
            aria-hidden="true"
            className="aui-pane-resize"
            onMouseDown={handleMouseDownResize}
            onTouchStart={handleTouchStartResize}
            tabIndex={-1}
            type="button"
          />
        ) : null
      }
    </div>
  );
};

export default Pane;
