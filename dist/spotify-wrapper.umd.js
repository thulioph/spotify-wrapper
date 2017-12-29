(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONFIG = exports.CONFIG = {
  Authorization: 'Bearer BQDiPsI-7RprUCAiKr8yTqKbU2rOOTECgVtFsptZUaBJwzbYUZ8zP695LqfQwG12LfhpByaKf78brWkowcA'
};

var API_URL = exports.API_URL = 'https://api.spotify.com/v1';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _search = __webpack_require__(2);

var _album = __webpack_require__(3);

module.exports = {
  search: _search.search,
  searchAlbums: _search.searchAlbums,
  searchArtists: _search.searchArtists,
  searchTracks: _search.searchTracks,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = __webpack_require__(0);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = __webpack_require__(0);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map