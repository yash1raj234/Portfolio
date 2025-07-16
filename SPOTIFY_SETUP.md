# Spotify Music Player Setup Guide

This guide will help you set up the Spotify music player for your portfolio website.

## Prerequisites

1. **Spotify Premium Account**: The Spotify Web Playback SDK requires a Premium account
2. **Spotify Developer Account**: You need to create a Spotify app in the developer dashboard

## Step-by-Step Setup

### 1. Create a Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click "Create App"
4. Fill in the app details:
   - **App name**: Your portfolio name (e.g., "Yashraj Portfolio")
   - **App description**: Brief description of your portfolio
   - **Website**: Your portfolio URL
   - **Redirect URI**: Add your website URL (e.g., `http://localhost:5173` for development)
   - **API/SDKs**: Select "Web API"
5. Click "Save"

### 2. Get Your Client ID

1. After creating the app, you'll be redirected to the app dashboard
2. Copy the **Client ID** (you'll need this for the configuration)

### 3. Configure Your App

1. Open `src/config/spotify.js`
2. Replace `YOUR_SPOTIFY_CLIENT_ID_HERE` with your actual Client ID:

```javascript
export const SPOTIFY_CONFIG = {
  CLIENT_ID: "your_actual_client_id_here", // Replace this
  // ... rest of the config
};
```

### 4. Add Redirect URIs

1. In your Spotify app dashboard, go to "Edit Settings"
2. Under "Redirect URIs", add:
   - `http://localhost:5173` (for development)
   - `https://yourdomain.com` (for production)
3. Click "Save"

### 5. Test the Player

1. Start your development server: `npm run dev`
2. Navigate to your website
3. Look for the Spotify player button in the bottom-right corner
4. Click it and then click "Connect Spotify"
5. Authorize your Spotify account
6. Start playing music on Spotify and the player should show your current track

## Features

The music player includes:

- ✅ **Floating Widget**: Fixed position in bottom-right corner
- ✅ **Toggle Functionality**: Click to show/hide the player
- ✅ **Current Track Display**: Shows song title, artist, album, and album art
- ✅ **Progress Bar**: Visual progress indicator with time display
- ✅ **Playback Controls**: Play/pause, next, previous buttons
- ✅ **Responsive Design**: Matches your website's theme
- ✅ **Smooth Animations**: Hover effects and transitions
- ✅ **Error Handling**: Graceful error states and loading indicators

## Troubleshooting

### Common Issues

1. **"Failed to initialize Spotify player"**
   - Make sure you have a Spotify Premium account
   - Check that your Client ID is correct
   - Verify your redirect URI is properly configured

2. **"No track playing"**
   - Start playing music on Spotify (desktop app or web player)
   - Make sure you're using the same Spotify account

3. **Player not appearing**
   - Check browser console for errors
   - Ensure the component is properly imported in App.jsx

4. **Authentication issues**
   - Clear browser cache and cookies
   - Check that your redirect URI matches exactly

### Browser Compatibility

The Spotify Web Playback SDK works best with:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Security Notes

- Never commit your actual Client ID to public repositories
- Consider using environment variables for production
- The access token is temporary and expires after 1 hour

## Customization

You can customize the player by modifying:
- Colors in `src/index.css` (uses your existing color scheme)
- Position in `SpotifyPlayer.jsx` (change `fixed bottom-4 right-4`)
- Size and styling in the component's JSX

## Support

If you encounter issues:
1. Check the [Spotify Web Playback SDK documentation](https://developer.spotify.com/documentation/web-playback-sdk)
2. Verify your Spotify app settings
3. Check browser console for error messages 