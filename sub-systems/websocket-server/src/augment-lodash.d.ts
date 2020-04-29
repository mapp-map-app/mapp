import { CollectionChain, LoDashStatic } from 'lodash'

declare module 'lodash' {
  interface CollectionChain<T> {
    getById(id: string): ObjectChain<T>
    upsert(document: T): ObjectChain<T>
  }

  interface LoDashStatic {
    createId(collectionName: string, item: any): string
  }
}
