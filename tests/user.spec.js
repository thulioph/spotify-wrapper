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

    it('should have recomendations method.', () => {
      expect(spotify.user.recomendations).to.exist;
    });

    it('should have profile method.', () => {
      expect(spotify.user.profile).to.exist;
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

  describe('profile', () => {
    it('should call fetch method', () => {
      const userProfile = spotify.user.profile();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const userProfile = spotify.user.profile();
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/me');
    });

    it('should return the correct data from promise', () => {
      const obj = {
        birthdate: '1937-06-01',
        country: 'SE',
        display_name: 'JM Wizzler',
        email: 'email@example.com',
        external_urls: {},
        followers: {},
        href: 'https://api.spotify.com/v1/users/wizzler',
        id: 'wizzler',
        images: [],
        product: 'premium',
        type: 'user',
        uri: 'spotify:user:wizzler',
      };

      promise.resolves(obj);
      const userProfile = spotify.user.profile();

      expect(userProfile.resolveValue).to.be.eql(obj);
    });
  });

  describe('recomendations', () => {
    describe('artists', () => {
      it('should call fetch with artists as a parameter.', () => {
        const newArtists = spotify.user.recomendations('artists');
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL and ID.', () => {
        const newArtists = spotify.user.recomendations('artists', '1');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/recommendations?seed_artists=1');

        const newArtists2 = spotify.user.recomendations('artists', '2');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/recommendations?seed_artists=2');
      });

      it('should return the correct data from promise', () => {
        const obj = {
          artists: [],
        };

        promise.resolves(obj);
        const recomendations = spotify.user.recomendations('artists', '1');

        expect(recomendations.resolveValue).to.be.eql(obj);
      });
    });

    describe('tracks', () => {
      it('should call fetch with tracks as a parameter.', () => {
        const newtracks = spotify.user.recomendations('tracks');
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL and ID.', () => {
        const newtracks = spotify.user.recomendations('tracks', '1');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/recommendations?seed_tracks=1');

        const newtracks2 = spotify.user.recomendations('tracks', '2');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/recommendations?seed_tracks=2');
      });

      it('should return the correct data from promise', () => {
        const obj = {
          tracks: [],
        };

        promise.resolves(obj);
        const recomendations = spotify.user.recomendations('tracks', '1');

        expect(recomendations.resolveValue).to.be.eql(obj);
      });
    });

    describe('genres', () => {
      it('should call fetch with genres as a parameter.', () => {
        const newGenres = spotify.user.recomendations('genres');
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL and ID.', () => {
        const newGenres = spotify.user.recomendations('genres', '1');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/recommendations?seed_genres=1');

        const newGenres2 = spotify.user.recomendations('genres', '2');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/recommendations?seed_genres=2');
      });

      it('should return the correct data from promise', () => {
        const obj = {
          genres: [],
        };

        promise.resolves(obj);
        const recomendations = spotify.user.recomendations('genres', '1');

        expect(recomendations.resolveValue).to.be.eql(obj);
      });
    });
  });
});
