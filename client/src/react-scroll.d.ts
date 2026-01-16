declare module 'react-scroll' {
  import { ComponentType } from 'react';

  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
  }

  export const Link: ComponentType<LinkProps>;
}
