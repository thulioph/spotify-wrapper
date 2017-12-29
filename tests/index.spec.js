import { expect } from 'chai';

import SpotifyWrapper from '../src/index';

// ====

describe('SpotifyWrapper Library', () => {
  it('should create a new instance of SpotifyWrapper.', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive an apiURL as a parameter.', () => {
    const spotify = new SpotifyWrapper({
      apiUrl: 'spotify.com',
    });

    expect(spotify.apiUrl).to.be.equal('spotify.com');
  });

  it('should use the default API_URL if not provided.', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiUrl).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive a TOKEN as a parameter.', () => {
    const spotify = new SpotifyWrapper({
      token: 'dsdsds',
    });

    expect(spotify.token).to.be.equal('dsdsds');
  });
});
