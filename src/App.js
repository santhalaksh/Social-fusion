// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './App.css';
import InstagramLogin from 'components./InstagramLogin';
import TikTokLogin from 'components./TikTokLogin';
import RegistrationForm from './components/RegistrationForm';
import UserProfile from './components/UserProfile';
import Feed from './components/Feed';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState({
    username: '',
    email: '',
    profilePicture: '',
    followers: 0,
    following: 0,
  });
  const [posts, setPosts] = useState([]);

  // Event handlers for actual login/register functionality
  const handleLogin = () => {
    // Implement login logic here
    alert('Logged in!');
  };

  const handleRegister = () => {
    // Implement registration logic here
    alert('Registered successfully!');
  };

  const handleUserRegister = (userData) => {
    setUser(userData); // Update user state with registration data
  };

  return (
    <div className="App">
      <div className="nav-buttons">
        <button
          className={showLogin ? 'active' : ''}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          className={!showLogin ? 'active' : ''}
          onClick={() => setShowLogin(false)}
        >
          Register
        </button>
      </div>
      {/* Conditional rendering of login/register forms */}
      {showLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Register onRegister={handleRegister} />
      )}
      <h1>Social Media Integration</h1>
      <div className="login-container">
        <InstagramLogin />
        <TikTokLogin />
      </div>
      <RegistrationForm onRegister={handleUserRegister} />
      <UserProfile user={user} />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
