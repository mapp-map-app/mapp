import { CollectionChain } from 'lodash'

declare module 'lodash' {
  interface CollectionChain<T> {
    getById(id: string): ObjectChain<T>
    upsert(document: T): ObjectChain<T>
  }
}
