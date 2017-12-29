import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from './search';

import {
  getAlbum,
  getAlbums,
  getAlbumTracks,
} from './album';

import {
  API_URL,
} from './config';

// ====

export default class SpotifyWrapper {
  constructor(options) {
    const { apiUrl, token } = options;

    this.apiUrl = apiUrl || API_URL;
    this.token = token;
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(url, headers);
  }
}
