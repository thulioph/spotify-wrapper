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

// ====

describe('SpotifyWrapper request method', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise(); // returns the promise to allow .then()
  });

  afterEach(() => {
    fetchedStub.restore(); // close the stub
  });

  it('should have request method.', () => {
    let spotify = new SpotifyWrapper({});

    expect(spotify.request).to.be.exist;
  });

  it('should call fetch when request.', () => {
    let spotify = new SpotifyWrapper({
      token: 'dsdss',
    });

    spotify.request();
    expect(fetchedStub).to.have.been.calledOnce;
  });

  it('should call fetch with the correct URL.', () => {
    let spotify = new SpotifyWrapper({
      token: 'dsdss',
    });

    spotify.request('url');
    expect(fetchedStub).to.have.been.calledWith('url');
  });

  it('should call fetch with the correct headers passed.', () => {
    let spotify = new SpotifyWrapper({
      token: 'dsdss',
    });

    const headers = {
      headers: {
        Authorization: 'Bearer dsdss',
      },
    };

    spotify.request('url');
    expect(fetchedStub).to.have.been.calledWith('url', headers);
  });
});
