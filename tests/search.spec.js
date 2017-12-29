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

describe('Search', () => {
  let spotify;
  let stubedFetch;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'dsdsds',
    });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise(); // returns the promise to allow .then()
  });

  afterEach(() => {
    stubedFetch.restore(); // close the stub
  });

  describe('Smoke Tests', () => {
    it('should exist the spotify.search.Albums method.', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the spotify.search.Artists method.', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the spotify.search.Tracks method.', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the spotify.search.Playlists method.', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('Search Albums', () => {
    it('should call the fetch method.', () => {
      const albums = spotify.search.albums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('passing one type', () => {
      const albums = spotify.search.albums('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const albums2 = spotify.search.albums('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });

    it('should return the correct data from promise.', () => {
      promise.resolves({ search: 'ds' });
      const albums = spotify.search.albums('Incubus');

      expect(albums.resolveValue).to.be.eql({ search: 'ds' });
    });
  });

  describe('Search Artist', () => {
    it('should call fetch function.', () => {
      const artists = spotify.search.artists();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL.', () => {
      const artists = spotify.search.artists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artist2 = spotify.search.artists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('Search Tracks', () => {
    it('should call fetch function.', () => {
      const tracks = spotify.search.tracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL.', () => {
      const trackss = spotify.search.tracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = spotify.search.tracks('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('Search Playlists', () => {
    it('should call fetch function.', () => {
      const playlists = spotify.search.playlists();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL.', () => {
      const playlist = spotify.search.playlists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlist2 = spotify.search.playlists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
