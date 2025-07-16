import { useState, useEffect, useRef } from "react";
import { SPOTIFY_CONFIG } from "../config/spotify";

const SpotifyPlayer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const playerRef = useRef(null);

  // Spotify Web Playback SDK configuration
  const { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPE } = SPOTIFY_CONFIG;

  useEffect(() => {
    const token = getTokenFromUrl();
    if (token) {
      initializePlayer(token);
    }
  }, []);

  const getTokenFromUrl = () => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get("access_token");
  };

  const initializePlayer = async (token) => {
    setIsLoading(true);
    try {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;

      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: "Portfolio Music Player",
          getOAuthToken: cb => { cb(token); }
        });

        player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
          setPlayer(player);
          setIsLoading(false);
        });

        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });

        player.addListener('player_state_changed', (state) => {
          if (state) {
            setIsPlaying(!state.paused);
            if (state.track_window?.current_track) {
              setCurrentTrack({
                name: state.track_window.current_track.name,
                artist: state.track_window.current_track.artists[0].name,
                album: state.track_window.current_track.album.name,
                albumArt: state.track_window.current_track.album.images[0]?.url,
                duration: state.track_window.current_track.duration_ms,
                progress: state.position
              });
            }
          }
        });

        player.connect();
      };
    } catch (error) {
      console.error("Error initializing Spotify player:", error);
      setError("Failed to initialize Spotify player");
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    window.location.href = authUrl;
  };

  const togglePlayPause = () => {
    if (player) {
      player.togglePlay();
    }
  };

  const nextTrack = () => {
    if (player) {
      player.nextTrack();
    }
  };

  const previousTrack = () => {
    if (player) {
      player.previousTrack();
    }
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!getTokenFromUrl() && !player) {
    return (
      <div className="spotify-player-container">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="spotify-player-button"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </button>
        
        {isVisible && (
          <div className="spotify-player-panel">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Spotify Player</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-lavender to-royal rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <p className="text-neutral-400 mb-4">Connect to Spotify to start listening</p>
              <button
                onClick={handleLogin}
                className="w-full px-4 py-3 bg-gradient-to-r from-lavender to-royal hover:from-royal hover:to-lavender text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-1"
              >
                Connect Spotify
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="spotify-player-container">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="spotify-player-button"
      >
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </button>
      
      {isVisible && (
        <div className="spotify-player-panel">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Now Playing</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin w-8 h-8 border-2 border-lavender border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-neutral-400">Connecting to Spotify...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-coral mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gradient-to-r from-lavender to-royal text-white rounded-lg"
              >
                Retry
              </button>
            </div>
          ) : currentTrack ? (
            <>
              <div className="flex items-center mb-4">
                <img
                  src={currentTrack.albumArt}
                  alt={currentTrack.album}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium truncate">{currentTrack.name}</h4>
                  <p className="text-neutral-400 text-sm truncate">{currentTrack.artist}</p>
                  <p className="text-neutral-500 text-xs truncate">{currentTrack.album}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="spotify-progress-bar mb-2">
                  <div
                    className="spotify-progress-fill"
                    style={{
                      width: `${(currentTrack.progress / currentTrack.duration) * 100}%`
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>{formatTime(currentTrack.progress)}</span>
                  <span>{formatTime(currentTrack.duration)}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={previousTrack}
                  className="spotify-control-button"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                  </svg>
                </button>
                
                <button
                  onClick={togglePlayPause}
                  className="spotify-play-button"
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
                
                <button
                  onClick={nextTrack}
                  className="spotify-control-button"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-lavender to-royal rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <p className="text-neutral-400">No track playing</p>
              <p className="text-neutral-500 text-sm mt-2">Start playing music on Spotify</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer; 