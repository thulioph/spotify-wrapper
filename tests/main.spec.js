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
    it('should call the fetch method.', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });
  });
});
