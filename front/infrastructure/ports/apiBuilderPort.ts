export type query = { [key: string]: string | number };

export type endpoint = 'searchMovie' | 'title' | 'mostPopularMovies';

export interface apiEndpointUrlProps {
  endpoint: endpoint,
  expression?: string,
  id?: string,
}

export interface apiBuilderPort {
  apiEndpointUrl: (props: apiEndpointUrlProps) => string;
  queryBuilder: (query: query) => string;
}