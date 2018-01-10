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
    },
    recomendations: function recomendations(type, id) {
      return _this.request(_this.apiUrl + "/recommendations?seed_" + type + "=" + id);
    }
  };
}