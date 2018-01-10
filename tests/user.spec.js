import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise'; // allow us to work with promise
import nodeFetch from 'node-fetch';

import SpotifyWrapper from '../src/index';

// ====

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = nodeFetch;

// ====

describe('User', () => {
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
    it('should have topArtists method.', () => {
      expect(spotify.user.topArtists).to.exist;
    });

    it('should have topTracks method.', () => {
      expect(spotify.user.topTracks).to.exist;
    });
  });

  describe('topArtists', () => {
    it('should call fetch method', () => {
      const topArtists = spotify.user.topArtists();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const topArtists = spotify.user.topArtists();
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/me/top/artists');
    });

    it('should return the correct data from promise', () => {
      const obj = {
        items: [{}],
        next: '',
        previous: '',
        total: 0,
        limit: 0,
        href: '',
      };

      promise.resolves(obj);
      const topArtists = spotify.user.topArtists();

      expect(topArtists.resolveValue).to.be.eql(obj);
    });
  });

  describe('topTracks', () => {
    it('should call fetch method', () => {
      const topTracks = spotify.user.topTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const topTracks = spotify.user.topTracks();
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/me/top/tracks');
    });

    it('should return the correct data from promise', () => {
      const obj = {
        album: {},
        artists: [],
        available_markets: [],
        disc_number: 0,
        duration_ms: 0,
        explicit: true,
        external_ids: '',
        external_urls: '',
        href: '',
        id: '',
        is_playable: true,
        linked_from: '',
        restrictions: {},
        name: '',
        popularity: 0,
        preview_url: '',
        track_number: 0,
        type: '',
        uri: '',
      };

      promise.resolves(obj);
      const topTracks = spotify.user.topTracks();

      expect(topTracks.resolveValue).to.be.eql(obj);
    });
  });
});
