import { Attributes } from './Attributes';
import { Relationships } from './Relationships';
import { Links } from './Links';
import { Meta } from './Meta';

export interface ResourceObject {
  id: string;
  type: string;
  attributes?: Attributes;
  relationships?: {
    [key: string]: Relationships;
  };
  links?: Links;
  meta?: Meta;
};
