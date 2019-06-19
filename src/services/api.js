import config from '../config.js';
const baseUrl = 'https://api.giphy.com/v1/gifs/';

export default {
  search(queryString) {
    const queryType = 'search';
    const url = `${baseUrl}${queryType}?api_key=${
      config.apiKey
    }&q=${queryString}&limit=10&rating=g`;
    const result = fetch(url).then(response => response.json());

    return result;
    //https://api.giphy.com/v1/gifs/search?api_key=kaffg8VLqZa9xYWlngQszP3Wwgzv7JHQ&q=star wars&limit=25&offset=0&rating=G&lang=en
  }
};
