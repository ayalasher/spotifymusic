export const spotifyCredentials = {
    clientId: '67e17de60bac47109bf1f9b6b64f91ed',
    clientSecret: 'c78ab835ab8941b4a467d14217a39f9f',
    redirectUri: 'https://spotifyredirectionwebsite.vercel.app/', // Must match the redirect URI in Spotify Dashboard
    scopes: [
      'user-read-private',
      'user-read-email',
      'user-read-currently-playing',
      'user-read-playback-state',
      'user-modify-playback-state',
    ].join(' '), // Add other scopes as needed
  };