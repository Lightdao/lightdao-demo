import { ComponentType, Element } from 'react';

export interface IRoute {
  path?: string;
  name?: string;
  layout?: string;
  exact?: boolean;
  component?: ComponentType | (() => JSX.Element);
  icon?: ComponentType | string | Element | JSX.Element;
  secondary?: boolean;
  collapse?: boolean;
  items?: RoutesType[];
}
interface RoutesType {
  name: string;
  path: string;
  icon?: JSX.Element;
  secondary?: boolean;
  layout?: string;
  component?: () => JSX.Element;
  collapse?: boolean;
  items?: {
    name: string;
    path: string;
    secondary?: boolean;
    layout?: string;
    component?: () => JSX.Element;
    collapse?: boolean;
    items?: {
      name: string;
      layout: string;
      path: string;
      component: () => JSX.Element;
      secondary?: boolean;
    }[];
  }[];
}
