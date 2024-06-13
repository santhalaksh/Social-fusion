const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Endpoint for Instagram Login
app.get('/auth/instagram', (req, res) => {
  const client_id = 'YOUR_INSTAGRAM_CLIENT_ID';
  const redirect_uri = 'YOUR_INSTAGRAM_REDIRECT_URI';
  const url = `https://api.instagram.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=user_profile,user_media`;
  res.redirect(url);
});

app.post('/auth/instagram/callback', async (req, res) => {
  const { code } = req.body;
  const client_id = 'YOUR_INSTAGRAM_CLIENT_ID';
  const client_secret = 'YOUR_INSTAGRAM_CLIENT_SECRET';
  const redirect_uri = 'YOUR_INSTAGRAM_REDIRECT_URI';

  try {
    const response = await axios.post(`https://api.instagram.com/oauth/access_token`, {
      client_id,
      client_secret,
      grant_type: 'authorization_code',
      redirect_uri,
      code,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint for TikTok Login
app.get('/auth/tiktok', (req, res) => {
  const client_key = 'YOUR_TIKTOK_CLIENT_KEY';
  const redirect_uri = 'YOUR_TIKTOK_REDIRECT_URI';
  const url = `https://open-api.tiktok.com/oauth/authorize?client_key=${client_key}&redirect_uri=${redirect_uri}&response_type=code&scope=user.info.basic`;
  res.redirect(url);
});

app.post('/auth/tiktok/callback', async (req, res) => {
  const { code } = req.body;
  const client_key = 'YOUR_TIKTOK_CLIENT_KEY';
  const client_secret = 'YOUR_TIKTOK_CLIENT_SECRET';
  const redirect_uri = 'YOUR_TIKTOK_REDIRECT_URI';

  try {
    const response = await axios.post(`https://open-api.tiktok.com/oauth/access_token`, {
      client_key,
      client_secret,
      grant_type: 'authorization_code',
      redirect_uri,
      code,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
