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

// module.exports = {
//   search,
//   searchAlbums,
//   searchArtists,
//   searchTracks,
//   searchPlaylists,
//   getAlbum,
//   getAlbums,
//   getAlbumTracks,
// };

export default class SpotifyWrapper {
  constructor(options) {
    const { apiUrl, token } = options;

    this.apiUrl = apiUrl || API_URL;
    this.token = token;
  }
}
