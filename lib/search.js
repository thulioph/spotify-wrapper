'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

var search = exports.search = function search(query, type) {
  var url = _config.API_URL + '/search?q=' + query + '&type=' + type;
  var options = {
    headers: {
      Authorization: _config.CONFIG.Authorization
    }
  };

  return fetch(url, options).then(function (data) {
    return data.json();
  });
}; /* global fetch:false */

var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};