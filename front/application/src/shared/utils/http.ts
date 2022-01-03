const _LANG = '/en'
const _API_KEY = '/k_q9d0azct';
const _DOMAIN = 'https://imdb-api.com';

const GET = async <T>( endpoint: string, optEndpoint?: string ) => {
  const optReq: RequestInit = {
    method: 'GET'
  };
  const uri = _DOMAIN + _LANG + '/API' + endpoint + _API_KEY + ( optEndpoint ?? '' );
  const resp: Response = await fetch(uri, optReq);

  return await resp.json() as T;
};

export const http = {
  GET
}