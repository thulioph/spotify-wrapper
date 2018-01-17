export default function user() {
  return {
    profile: () => this.request(`${this.apiUrl}/me`),
    topArtists: () => this.request(`${this.apiUrl}/me/top/artists`),
    topTracks: () => this.request(`${this.apiUrl}/me/top/tracks`),
    recomendations: (type, id) => this.request(`${this.apiUrl}/recommendations?seed_${type}=${id}`),
  };
}
