export default function user() {
  return {
    topArtists: () => this.request(`${this.apiUrl}/v1/me/top/artists`),
    topTracks: () => this.request(`${this.apiUrl}/v1/me/top/tracks`),
  };
}
