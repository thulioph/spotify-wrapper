(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SpotifyWrapper"] = factory();
	else
		root["SpotifyWrapper"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global fetch:false */

var _search = __webpack_require__(2);

var _search2 = _interopRequireDefault(_search);

var _album = __webpack_require__(3);

var _album2 = _interopRequireDefault(_album);

var _audio = __webpack_require__(4);

var _audio2 = _interopRequireDefault(_audio);

var _user = __webpack_require__(5);

var _user2 = _interopRequireDefault(_user);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ====

var SpotifyWrapper = function () {
  function SpotifyWrapper(options) {
    _classCallCheck(this, SpotifyWrapper);

    this.apiUrl = options.apiUrl || _config2.default;
    this.token = options.token;

    this.album = _album2.default.bind(this)();
    this.search = _search2.default.bind(this)();
    this.audio = _audio2.default.bind(this)();
    this.user = _user2.default.bind(this)();
  }

  _createClass(SpotifyWrapper, [{
    key: 'request',
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      };

      return fetch(url, headers).then(function (data) {
        return data.json();
      });
    }
  }]);

  return SpotifyWrapper;
}();

exports.default = SpotifyWrapper;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
function searcher(type, query) {
  return this.request(this.apiUrl + '/search?q=' + query + '&type=' + type);
}

function search() {
  return {
    albums: searcher.bind(this, 'album'),
    artists: searcher.bind(this, 'artist'),
    tracks: searcher.bind(this, 'track'),
    playlists: searcher.bind(this, 'playlist')
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;
function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(id) {
      return _this.request(_this.apiUrl + "/albums/" + id);
    },
    getAlbums: function getAlbums(ids) {
      return _this.request(_this.apiUrl + "/albums/?ids=" + ids);
    },
    getTracks: function getTracks(id) {
      return _this.request(_this.apiUrl + "/albums/" + id + "/tracks");
    }
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = audio;
function audio() {
  var _this = this;

  return {
    analysis: function analysis(trackID) {
      return _this.request(_this.apiUrl + "/audio-analysis/" + trackID);
    },
    features: function features(trackID) {
      return _this.request(_this.apiUrl + "/audio-features/" + trackID);
    }
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = user;
function user() {
  var _this = this;

  return {
    topArtists: function topArtists() {
      return _this.request(_this.apiUrl + "/me/top/artists");
    },
    topTracks: function topTracks() {
      return _this.request(_this.apiUrl + "/me/top/tracks");
    }
  };
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = 'https://api.spotify.com/v1';

exports.default = API_URL;

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map