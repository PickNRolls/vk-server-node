import { ResourceObject } from "./ResourceObject";
import { ResourceIdentifierObject } from "./ResourceIdentifierObject";

type PrimaryDataSingleResource =
  | ResourceObject
  | ResourceIdentifierObject
  | null

type PrimaryDataResourceCollections =
  | ResourceObject[]
  | ResourceIdentifierObject[]
  | []

export type TopLevelPrimaryData =
  | PrimaryDataSingleResource
  | PrimaryDataResourceCollections