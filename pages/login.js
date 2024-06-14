import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Login = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  
  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      router.push('/dokumente');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
