/* global fetch:false */

import CONFIG from '../src/config';

export const search = (query, type) => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
  const options = {
    headers: {
      Authorization: CONFIG.Authorization,
    },
  };

  return fetch(url, options).then(data => data.json());
};

export const searchAlbums = query => search(query, 'album');

export const searchArtists = query => search(query, 'artist');

export const searchTracks = query => search(query, 'track');

export const searchPlaylists = query => search(query, 'playlist');
