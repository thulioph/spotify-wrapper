/* global fetch:false */

import search from './search';
import album from './album';

import API_URL from './config';

// ====

export default class SpotifyWrapper {
  constructor(options) {
    this.apiUrl = options.apiUrl || API_URL;
    this.token = options.token;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(url, headers).then(data => data.json());
  }
}
