import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const getApiUrl = () => getConfig().publicRuntimeConfig.apiUrl;

export const swrFetch = async (
  path: string,
  init?: RequestInit | undefined
) => {
  const res = await fetch(`${getApiUrl()}${path}`, init);

  return res.json();
};

export const get = (path: string) => swrFetch(path);

export const put = (path: string, payload: Object) =>
  swrFetch(path, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
