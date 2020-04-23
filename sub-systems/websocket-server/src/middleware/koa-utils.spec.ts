import Koa from 'koa'
import { generateKoa } from './koa-utils';

jest.mock('koa')

describe('generateKoa', () => {
    const KoaMock = Koa as unknown as jest.Mock<Koa>;

    it('should return a new Koa app', () => {
        expect(generateKoa()).toBe(KoaMock.mock.instances[0])
    });
});
