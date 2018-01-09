export default function audio() {
  return {
    analysis: trackID => this.request(`${this.apiUrl}/audio-analysis/${trackID}`),
    features: trackID => this.request(`${this.apiUrl}/audio-features/${trackID}`),
  };
}
