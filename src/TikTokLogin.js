// TikTokLogin.js
import React, { useState } from 'react';

const TikTokLogin = ({ onLogin }) => {
  const [error, setError] = useState('');

  const handleTikTokLogin = () => {
    // Redirect users to TikTok OAuth authorization URL
    // Replace YOUR_CLIENT_KEY and YOUR_REDIRECT_URI with actual values
    window.location.href = `https://open-api.tiktok.com/oauth/authorize?client_key=YOUR_CLIENT_KEY&redirect_uri=YOUR_REDIRECT_URI&response_type=code`;
  };

  return (
    <div>
      <h3>TikTok Login</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleTikTokLogin}>Login with TikTok</button>
    </div>
  );
};

export default TikTokLogin;
