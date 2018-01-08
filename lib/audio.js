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