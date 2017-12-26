import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise'; // allow us to work with promise
import nodeFetch from 'node-fetch';

chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch = nodeFetch;

// ====

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

// ====

describe('Spotify Wrapper', () => {
  let fetchedStub, promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise(); // returns the promise to allow .then()
  });

  afterEach(() => {
    fetchedStub.restore(); // close the stub
  });

  describe('Smoke Tests', () => {
    it('should exist the search method.', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method.', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method.', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method.', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method.', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function.', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    context('should receive the correct URL to fetch.', () => {
      it('should call fetch with the correct URL.', () => {
        const artists = search('Incubus', 'artist');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albums = search('Incubus', 'albums');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=albums');
      });

      it('passing more than one type.', () => {
        const artistAndAlbum = search('Incubus', ['artist', 'album']);
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });

      it('should return the JSON data from the Promise.', () => {
        promise.resolves({ 'body': 'json' }); // resolve the promises here and check the data
        const artists = search('Incubus', 'artist');

        // `resolveValue` contains the value of resolved promise
        // `.eql === toDeepEqual` onde checa todas as propriedades
        expect(artists.resolveValue).to.eql({ 'body': 'json' });
      });
    });
  });

  describe('Search Albums', () => {
    it('should call the fetch method.', () => {
      const artists = searchAlbums();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('passing one type', () => {
      const albums = searchAlbums('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      const albums2 = searchAlbums('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('Search Artist', () => {
    it('should call fetch function.', () => {
      const artists = searchArtists();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL.', () => {
      const artists = searchArtists('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      const artist2 = searchArtists('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('Search Tracks', () => {
    it('should call fetch function.', () => {
      const tracks = searchTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL.', () => {
      const trackss = searchTracks('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      const tracks2 = searchTracks('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('Search Playlists', () => {
    it('should call fetch function.', () => {
      const playlists = searchPlaylists();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL.', () => {
      const playlist = searchPlaylists('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      const playlist2 = searchPlaylists('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
