// context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username, password) => {
    // Simulated authentication logic, replace with actual logic
    if (username === 'user' && password === 'pass') {
      setIsAuthenticated(true);
      localStorage.setItem('authToken', 'your-token');
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};