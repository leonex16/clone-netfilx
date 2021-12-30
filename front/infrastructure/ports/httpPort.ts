export type httpPortProps = {
  url: string,
  body?: any,
  headers?: HeadersInit
};

export interface httpPort {
  get<T>(props: httpPortProps): Promise<T>;
  post<T>(props: httpPortProps): Promise<T>;
  put<T>(props: httpPortProps): Promise<T>;
  delete<T>(props: httpPortProps): Promise<T>;
}