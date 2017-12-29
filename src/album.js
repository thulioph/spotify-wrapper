/* global fetch:false */

import { CONFIG, API_URL } from '../src/config';

export const getAlbum = (id) => {
  const url = `${API_URL}/albums/${id}`;
  const options = {
    headers: {
      Authorization: CONFIG.Authorization,
    },
  };

  return fetch(url, options).then(data => data.json());
};

export const getAlbums = (id) => {
  const url = `${API_URL}/albums/?ids=${id}`;
  const options = {
    headers: {
      Authorization: CONFIG.Authorization,
    },
  };

  return fetch(url, options).then(data => data.json());
};

export const getAlbumTracks = (id) => {
  const url = `${API_URL}/albums/${id}/tracks`;
  const options = {
    headers: {
      Authorization: CONFIG.Authorization,
    },
  };

  return fetch(url, options).then(data => data.json());
};
