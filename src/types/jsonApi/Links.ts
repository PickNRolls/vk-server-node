import { Meta } from './Meta';

export interface LinkObject {
  href?: string;
  meta?: Meta;
}

export interface Links {
  self?: string | LinkObject;
  related?: string | LinkObject;
  first?: string | LinkObject;
  last?: string | LinkObject;
  prev?: string | LinkObject;
  next?: string | LinkObject;
};
