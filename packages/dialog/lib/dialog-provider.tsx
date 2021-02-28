import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

export interface DialogContextProps {
  /** Whether to show the component in the dialog provider */
  isShowing?: boolean;
  /** Hides the current dialog component */
  hide(): void;
  /** Shows the component if defined by component name */
  show(componentName: string): void;
}

export const DialogContext = createContext<DialogContextProps>({
  isShowing: false,
  hide() {},
  show() {},
});

export const useDialog = () => useContext(DialogContext);

export interface DialogComponents {
  [componentName: string]: Function;
}

export interface DialogProviderProps {
  /** Children to render within the dialog provider */
  children?: ReactNode;
  /** Components mapped by name to render in the dialog provider */
  components?: DialogComponents;
}

export const DialogProvider = ({
  children,
  components = {},
}: DialogProviderProps) => {
  const [componentName, setComponentName] = useState('');
  const [isShowing, setShowing] = useState(false);
  const Component = components[componentName];
  const hide = () => setShowing(false);
  const show = (name: string) => {
    setComponentName(name);
    setShowing(true);
  };
  return (
    <DialogContext.Provider value={{ isShowing, hide, show }}>
      {children}
      {
        isShowing && Component ? <Component /> : null
      }
    </DialogContext.Provider>
  );
};

export default DialogProvider;
