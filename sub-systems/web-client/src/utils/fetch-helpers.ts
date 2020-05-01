import fetch from 'isomorphic-unfetch';

export const swrFetch =  async (input: RequestInfo, init?: RequestInit | undefined) => {
  const res = await fetch(input, init);

  return res.json();
}