import { httpPort, httpPortProps } from "../ports/httpPort";

type methods = "GET" | "POST" | "PUT" | "DELETE";

const METHOD: methods = "GET";
const HEADERS: HeadersInit = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

function _buildOptions( method?: methods, headers?: HeadersInit, body?: any ): RequestInit {
  const options: RequestInit = {
    method: method ?? METHOD,
    headers: headers ?? HEADERS,
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return options;
}

export const httpNativeAdapter: httpPort = {
  async get<T>({url, headers}: httpPortProps ): Promise<T> {
    const response: Response = await fetch(url, _buildOptions("GET", headers, null));
    const json = await response.json();
    return json as T;
  },

  async post<T>({url, body, headers}: httpPortProps ): Promise<T> {
    const response: Response = await fetch(url, _buildOptions("POST", headers, body));
    const json = await response.json();
    return json as T;
  },

  async put<T>({url, body, headers}: httpPortProps ): Promise<T> {
    const response: Response = await fetch(url, _buildOptions("PUT", headers, body));
    const json = await response.json();
    return json as T;
  },

  async delete<T>({url, headers}: httpPortProps ): Promise<T> {
    const response: Response = await fetch(url, _buildOptions("DELETE", headers, null));
    const json = await response.json();
    return json as T;
  },

}