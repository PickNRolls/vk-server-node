import { LinkObject } from './Links';
import { Meta } from './Meta';

export interface ErrorObject {
  id?: string;
  links?: {
    about: string | LinkObject;
  };
  status?: string;
  code?: string;
  title?: string;
  detail?: string;
  source?: {
    pointer?: string;
    paramater?: string;
  };
  meta?: Meta;
}
