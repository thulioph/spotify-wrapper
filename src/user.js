export default function user() {
  return {
    topArtists: () => this.request(`${this.apiUrl}/me/top/artists`),
    topTracks: () => this.request(`${this.apiUrl}/me/top/tracks`),
  };
}
