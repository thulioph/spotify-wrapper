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

  context('Smoke Tests', () => {
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

  context('Generic Search', () => {
    let fetchedStub, promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise(); // returns the promise to allow .then()
    });

    afterEach(() => {
      fetchedStub.restore(); // close the stub
    });

    it('should call the fetch method.', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    context('should receive the correct URL to fetch.', () => {
      it('passing one type', () => {
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
});
