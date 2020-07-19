import { BaseError } from 'errors';
import { Meta } from './Meta';
import { Links } from './Links';
import { TopLevelPrimaryData } from './TopLevelPrimaryData';
import { JsonApi } from './JsonApi';
import { ErrorObject } from './ErrorObject';
import { ResourceObject } from './ResourceObject';

interface HasData<TData extends TopLevelPrimaryData> {
  data: TData,
  meta?: Meta,
  jsonapi?: JsonApi,
  links?: Links,
  included?: ResourceObject[],
}

interface HasErrors {
  errors: ErrorObject[],
  meta?: Meta,
  jsonapi?: JsonApi,
  links?: Links,
}

interface HasMetaAndMayBeErrors {
  errors?: ErrorObject[],
  meta: Meta,
  jsonapi?: JsonApi,
  links?: Links,
}

interface HasMetaAndData<TData extends TopLevelPrimaryData> {
  data: TData,
  meta: Meta,
  jsonapi?: JsonApi,
  links?: Links,
  included?: ResourceObject[],
}

export type TopLevel<TData extends TopLevelPrimaryData> =
  | HasData<TData>
  | HasErrors
  | HasMetaAndMayBeErrors
  | HasMetaAndData<TData>
