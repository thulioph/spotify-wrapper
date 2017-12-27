// getAlbum
// getAlbumTracks

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import nodeFetch from 'node-fetch';

import { getAlbum, getAlbumTracks } from '../src/albums';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = nodeFetch;

// ====

describe('Album', () => {
  let stubedFetch, promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke Test', () => {
    it('should have getAlbum method.', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method.', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method.', () => {
      const album = getAlbum();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');


      const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });

    // se o dado é recebido pela promise
    it('should return the correct data from promise.', () => {
      promise.resolves({ album: 'name'});
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      expect(album.resolveValue).to.be.eql({album: 'name'});
    });
  });
});
