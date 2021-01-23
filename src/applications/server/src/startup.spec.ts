import startup from './startup';
import registerMiddleware from './middleware/register';
import registerWebsocket from './websocket/register';
import { startupDatabase } from './persistance/startup';
import * as koaUtils from './middleware/koa-utils';
import http from 'http';
import Chance from 'chance';

jest.mock('./middleware/register');
jest.mock('./websocket/register');
jest.mock('./middleware/koa-utils');
jest.mock('./persistance/startup');
jest.mock('http');

describe('startup', () => {
  const chance = new Chance();
  const generateKoa = koaUtils.generateKoa as jest.Mock;
  const createServer = http.createServer as jest.Mock;
  let mockApp: { callback: () => any },
    mockServer: { listen: (num: number) => any },
    fakeCallbackReturn: number;

  beforeEach(() => {
    fakeCallbackReturn = chance.natural();
    mockApp = {
      callback: jest.fn().mockReturnValue(fakeCallbackReturn),
    };

    mockServer = {
      listen: jest.fn(),
    };

    generateKoa.mockReturnValue(mockApp);
    createServer.mockReturnValue(mockServer);
    console.log = jest.fn();
  });

  it('should startup the db', async () => {
    await startup();

    expect(startupDatabase).toHaveBeenCalled();
  });

  it('should pass a koa app around', async () => {
    await startup();

    expect(registerMiddleware).toHaveBeenCalledWith(mockApp);
    expect(createServer).toHaveBeenCalledWith(fakeCallbackReturn);
  });

  it('should register websocket stuff', async () => {
    await startup();

    expect(registerWebsocket).toHaveBeenCalledWith(mockServer);
  });

  it('should log', async () => {
    await startup();

    expect(console.log).toHaveBeenCalled();
  });

  it('should listen on 4000', async () => {
    await startup();

    expect(mockServer.listen).toHaveBeenCalledWith(4000);
  });
});
