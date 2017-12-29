'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('../src/config');

var getAlbum = exports.getAlbum = function getAlbum(id) {
  var url = _config.API_URL + '/albums/' + id;
  var options = {
    headers: {
      Authorization: _config.CONFIG.Authorization
    }
  };

  return fetch(url, options).then(function (data) {
    return data.json();
  });
}; /* global fetch:false */

var getAlbums = exports.getAlbums = function getAlbums(id) {
  var url = _config.API_URL + '/albums/?ids=' + id;
  var options = {
    headers: {
      Authorization: _config.CONFIG.Authorization
    }
  };

  return fetch(url, options).then(function (data) {
    return data.json();
  });
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  var url = _config.API_URL + '/albums/' + id + '/tracks';
  var options = {
    headers: {
      Authorization: _config.CONFIG.Authorization
    }
  };

  return fetch(url, options).then(function (data) {
    return data.json();
  });
};