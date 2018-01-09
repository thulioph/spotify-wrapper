"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = user;
function user() {
  var _this = this;

  return {
    topArtists: function topArtists() {
      return _this.request(_this.apiUrl + "/v1/me/top/artists");
    },
    topTracks: function topTracks() {
      return _this.request(_this.apiUrl + "/v1/me/top/tracks");
    }
  };
}