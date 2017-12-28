/* global fetch:false */

import { API_URL } from './config';
import { toJSON } from './utils';

export const getAlbum = id => (
  fetch(`${API_URL}/albums/${id}`).then(data => toJSON(data))
);

export const getAlbums = id => (
  fetch(`${API_URL}/albums/?ids=${id}`).then(data => toJSON(data))
);

export const getAlbumTracks = id => (
  fetch(`${API_URL}/albums/${id}/tracks`).then(data => toJSON(data))
);
