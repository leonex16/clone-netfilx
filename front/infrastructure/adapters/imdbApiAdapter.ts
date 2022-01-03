import { apiBuilderPort, apiEndpointUrlProps, query } from "../ports/apiBuilderPort";

const API_KEY = "k_q9d0azct";
const LANG = "es";
const API_BASE_URL = `https://imdb-api.com/${LANG}/API`;


const _apiEndpointUrl = ({endpoint, expression, id}: apiEndpointUrlProps): string => {
  const _endpoint = {
    searchMovie: `${API_BASE_URL}/SearchMovie/${API_KEY}/${expression}`,
    title: `${API_BASE_URL}/Title/${API_KEY}/${id}/Posters,Images,Trailer,Ratings`,
    mostPopularMovies: `${API_BASE_URL}/MostPopularMovies/${API_KEY}`,
  };

  return _endpoint[endpoint];
}

const _queryBuilder = (query: query): string => {
  const parseQuery = ([key, value]: [string, string | number]): string => {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);
    return key + '=' + value;
  }

  return Object.entries(query).map(parseQuery).join('&');
}

export const imdbApiAdapter: apiBuilderPort = {
  apiEndpointUrl: _apiEndpointUrl,
  queryBuilder: _queryBuilder,
};