import { Links } from './Links';
import { ResourceLinkage } from './ResourceLinkage';
import { Meta } from './Meta';

// A “relationship object” MUST contain at least one of the following:
interface HasLinks {
  links: Links;
  data?: ResourceLinkage;
  meta?: Meta;
}

interface HasData {
  links?: Links;
  data: ResourceLinkage;
  meta?: Meta;
}

interface HasMeta {
  links?: Links;
  data?: ResourceLinkage;
  meta: Meta;
}

export type Relationships =
  | HasLinks
  | HasData
  | HasMeta