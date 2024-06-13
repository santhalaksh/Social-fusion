// InstagramLogin.js
import React, { useState } from 'react';

const InstagramLogin = ({ onLogin }) => {
  const [error, setError] = useState('');

  const handleInstagramLogin = () => {
    // Redirect users to Instagram OAuth authorization URL
    // Replace YOUR_CLIENT_ID and YOUR_REDIRECT_URI with actual values
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=bismi881&redirect_uri=encodeURIComponent('https://www.example.com/auth/instagram/callback');&response_type=token`;
  };

  return(
    <div>
      <h3>Instagram Login</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleInstagramLogin}>Login with Instagram</button>
    </div>
  );
};

export default InstagramLogin;
