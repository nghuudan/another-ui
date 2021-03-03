import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

export interface DrawerContextProps {
  /** Whether the drawer is open in the drawer provider */
  isOpen: boolean;
  /** Closes the current drawer component */
  close(): void;
  /** Opens the drawer if defined by component name */
  open(componentName: string): void;
}

export const DrawerContext = createContext<DrawerContextProps>({
  isOpen: false,
  close() {},
  open() {},
});

export const useDrawer = () => useContext(DrawerContext);

export interface DrawerComponents {
  [componentName: string]: Function;
}

export interface DrawerProviderProps {
  /** Children to render within the drawer provider */
  children?: ReactNode;
  /** Components mapped by name to render in the drawer provider */
  components?: DrawerComponents;
}

export const DrawerProvider = ({
  children,
  components = {},
}: DrawerProviderProps) => {
  const [isOpen, setOpen] = useState(false);
  const [componentName, setComponentName] = useState('');
  const Component = components[componentName];
  const close = () => setOpen(false);
  const open = (name: string) => {
    setComponentName(name);
    setOpen(true);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, close, open }}>
      {children}
      {
        isOpen && Component ? <Component /> : null
      }
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
