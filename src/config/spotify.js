// Spotify Configuration
// You need to create a Spotify App at https://developer.spotify.com/dashboard
// and get your Client ID from there.

export const SPOTIFY_CONFIG = {
  CLIENT_ID: "YOUR_SPOTIFY_CLIENT_ID_HERE", // Replace with your actual Spotify Client ID
  REDIRECT_URI: window.location.origin,
  AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
  RESPONSE_TYPE: "token",
  SCOPE: "user-read-private user-read-email user-modify-playback-state user-read-playback-state streaming"
};

// Instructions to set up Spotify Web Playback SDK:
// 1. Go to https://developer.spotify.com/dashboard
// 2. Create a new app
// 3. Add your website URL to the Redirect URIs (e.g., http://localhost:5173 for development)
// 4. Copy your Client ID and replace "YOUR_SPOTIFY_CLIENT_ID_HERE" above
// 5. Make sure you have a Spotify Premium account (required for Web Playback SDK) 