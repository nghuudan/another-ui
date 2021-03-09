import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface HeaderProps {
  /** Children to render within the dialog */
  children?: ReactNode;
  /** Optional class name for the dialog */
  className?: string;
  /** Sets header to be fixed to the top */
  fixed?: boolean;
  /** Optional padding for the header */
  padding?: boolean;
  /** Sets header to be fixed only when scrolled below */
  sticky?: boolean;
  /** Sets optional header theme */
  theme?: 'dark';
}

export const Header = ({
  children,
  className,
  fixed,
  padding,
  sticky,
  theme,
}: HeaderProps) => {
  const [top, setTop] = useState(0);
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const cls = ['aui-header'];

  if (className) cls.push(className);
  if (fixed || isSticky) cls.push('aui-header-fixed');
  if (padding) cls.push('aui-header-padding');
  if (theme) cls.push(`aui-header-theme-${theme}`);

  useEffect(() => {
    let timeout: number;
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLDocument;
      const scrollTop = Number(target.scrollingElement?.scrollTop);
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        if (scrollTop > top) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }, 10);
    };

    setTop(Number(ref.current?.offsetTop));

    if (sticky) {
      window.addEventListener('scroll', handleScroll, false);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(timeout);
    };
  }, [top]);

  return (
    <header className={cls.join(' ')} ref={ref}>
      {children}
    </header>
  );
};

export default Header;
