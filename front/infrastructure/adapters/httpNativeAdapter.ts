import {
  HeadersInit, httpPort, httpPortProps, RequestInit,
} from '../ports/httpPort';

type methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

const METHOD: methods = 'GET';
const HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const _buildOptions = (method?: methods, headers?: HeadersInit, body?: any): RequestInit => {
  const options: RequestInit = {
    method: method ?? METHOD,
    headers: headers ?? HEADERS,
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return options;
}

const _get = async <T>({ url, headers }: httpPortProps): Promise<T> => {
  const response: Response = await fetch(url);
  const json = await response.json();
  return json as T;
};

const _post = async <T>({ url, body, headers }: httpPortProps): Promise<T> => {
  const response: Response = await fetch(url, _buildOptions('POST', headers, body));
  const json = await response.json();
  return json as T;
};

const _put = async <T>({ url, body, headers }: httpPortProps): Promise<T> => {
  const response: Response = await fetch(url, _buildOptions('PUT', headers, body));
  const json = await response.json();
  return json as T;
};

const _delete = async <T>({ url, headers }: httpPortProps): Promise<T> => {
  const response: Response = await fetch(url, _buildOptions('DELETE', headers, null));
  const json = await response.json();
  return json as T;
};

export const httpNativeAdapter: httpPort = {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete,
};
