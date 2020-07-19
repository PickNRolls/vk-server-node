import { ResourceIdentifierObject } from './ResourceIdentifierObject';

type EmptyToOneRelationship = null;
type EmptyToManyRelationship = [];
type NonEmptyToOneRelationship = ResourceIdentifierObject;
type NonEmptyToManyRelationship = ResourceIdentifierObject[];

export type ResourceLinkage =
  | EmptyToOneRelationship
  | EmptyToManyRelationship
  | NonEmptyToOneRelationship
  | NonEmptyToManyRelationship
