import { get } from './get';
import byObjectId from './:roomObjectId';
import { put } from './put';

export default [get, put, ...byObjectId];
