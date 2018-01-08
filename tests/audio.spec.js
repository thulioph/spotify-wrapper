import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import nodeFetch from 'node-fetch';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = nodeFetch;

describe('Audio Analysis', () => {
  let spotify;
  let stubedFetch;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'dsdsds',
    });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke Test', () => {
    it('should have analysis method.', () => {
      expect(spotify.audio.analysis).to.exist;
    });

    it('should have features method', () => {
      expect(spotify.audio.features).to.exist;
    });
  });

  describe('Analysis', () => {
    it('should call fetch method', () => {
      const analysis = spotify.audio.analysis();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch method with correct URL', () => {
      const trackAnalysis = spotify.audio.analysis('4aawyAB9vmqN3uQ7FjRGTy');

      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/audio-analysis/4aawyAB9vmqN3uQ7FjRGTy');
    });

    it('should return the correct data from promise', () => {
      const obj = {
        bars: [],
        beats: [],
        meta: {},
        sections: [],
        segments: [],
        tatums: [],
        track: {},
      };

      promise.resolves(obj);
      const trackAnalysis = spotify.audio.analysis('4aawyAB9vmqN3uQ7FjRGTy');

      expect(trackAnalysis.resolveValue).to.be.eql(obj);
    });
  });

  describe('Features', () => {
    it('should call fetch method', () => {
      const features = spotify.audio.features();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch method with correct URL', () => {
      const features = spotify.audio.features('4aawyAB9vmqN3uQ7FjRGTy');

      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/audio-features/4aawyAB9vmqN3uQ7FjRGTy');

      const features2 = spotify.audio.features('4aawyAB9vmqN3uQ7FjRGTw');

      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/audio-features/4aawyAB9vmqN3uQ7FjRGTw');
    });

    it('should return the correct data from promise', () => {
      const obj = {
        danceability: 0.735,
        energy: 0.578,
        key: 5,
        loudness: -11.840,
        mode: 0,
        speechiness: 0.0461,
        acousticness: 0.514,
        instrumentalness: 0.0902,
        liveness: 0.159,
        valence: 0.624,
        tempo: 98.002,
        type: 'audio_features',
        id: '06AKEBrKUckW0KREUWRnvT',
        uri: 'spotify:track:06AKEBrKUckW0KREUWRnvT',
        track_href: 'https://api.spotify.com/v1/tracks/06AKEBrKUckW0KREUWRnvT',
        analysis_url: 'https://api.spotify.com/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT',
        duration_ms: 255349,
        time_signature: 4,
      };

      promise.resolves(obj);
      const features = spotify.audio.features('4aawyAB9vmqN3uQ7FjRGTy');

      expect(features.resolveValue).to.be.eql(obj);
    });
  });
});
