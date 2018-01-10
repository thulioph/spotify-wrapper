# Spotify Wrapper

[![Build Status](https://travis-ci.org/thulioph/spotify-wrapper.svg?branch=master)](https://travis-ci.org/thulioph/spotify-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/thulioph/spotify-wrapper/badge.svg?branch=master)](https://coveralls.io/github/thulioph/spotify-wrapper?branch=master)

A wrapper to work with the [Spotify Web API](https://developer.spotify.com/web-api/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install spotify-wrapper --save
```

## How to use

### ES6

```js
// to import a specific method
import SpotifyWrapper from 'spotify-wrapper';

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

// using  method
spotify.search.artists('Incubus');
```

### CommonJS

```js
const SpotifyWrapper = require('spotify-wrapper').default;

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `SpotifyWrapper`. Follow an example:

```js

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

const albums = spotify.search.albums('Choosen Artist');
```

## Methods

> Follow the methods that the library provides.

### search.albums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.albums('Nirvana')
  .then(data => {
    // do what you want with the data
  })
```

### search.artists(query)

> Search for informations about Artists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *artist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.artists('Nirvana')
  .then(data => {
    // do what you want with the data
  })
```

### search.tracks(query)

> Search for informations about Tracks with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *track*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.tracks('Come as you are')
  .then(data => {
    // do what you want with the data
  })
```

### search.playlists(query)

> Search for informations about Playlist with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *playlist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.playlists('Hype')
  .then(data => {
    // do what you want with the data
  })
```

### album.getAlbum(id)

> Search for informations about a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
spotify.album.getAlbum('7D3XFJlfZIkmGWqZXm2X8z')
  .then(data => {
    // do what you want with the data
  })
```

### album.getAlbums(ids)

> Search for informations about some Albums with all id's. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*Array of strings* | ['id1', 'id2']|

**Example**

```js
spotify.album.getAlbums(['7D3XFJlfZIkmGWqZXm2X8z', '7D3XFJlfZIkmGWqZXm2X8s'])
  .then(data => {
    // do what you want with the data
  })
```

### album.getTracks(id)

> Search for all tracks in a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
spotify.album.getTracks('7D3XFJlfZIkmGWqZXm2X8z')
  .then(data => {
    // do what you want with the data
  })
```

### audio.analysis(id)

> Get a detailed audio analysis for a single track with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-audio-analysis-track/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
spotify.audio.analysis('1pr9TZGOXeJUggIal1Wq3R')
  .then(data => {
    // do what you want with the data
  })
```

### audio.features(id)

> Get an audio feature information for a single track with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-audio-features-track/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
spotify.audio.features('1pr9TZGOXeJUggIal1Wq3R')
  .then(data => {
    // do what you want with the data
  })
```

### user.topArtists()

> Get the current user's top artists based on calculated affinity. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-current-user-top-artists-and-tracks/).

**Example**

```js
spotify.user.topArtists()
  .then(data => {
    // do what you want with the data
  })
```

### user.topTracks()

> Get the current user's top tracks based on calculated affinity. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-current-user-top-artists-and-tracks/).

**Example**

```js
spotify.user.topTracks()
  .then(data => {
    // do what you want with the data
  })
```

### user.recomendations(type, id)

> Get a list of recomended tracks, artists or genders with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-recommendations/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`type` |*string* | 'tracks, artists or genres'|
|`id`   |*string* | 'Specific id'|

**Example**

```js
spotify.user.recomendations('tracks', '1bbWbxRbICBjpfPsug8dQ3')
  .then(data => {
    // do what you want with the data
  })
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/thulioph/spotify-wrapper/tags).

## Authors

| ![Thulio Philipe](https://avatars1.githubusercontent.com/u/2343288?s=150&v=4)|
|:---------------------:|
|  [Thulio Philipe](https://github.com/thulioph/)   |

See also the list of [contributors](https://github.com/thulioph/spotify-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
