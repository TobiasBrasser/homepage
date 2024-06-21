require('dotenv').config();

const config = {
  username: process.env.REACT_APP_USERNAME || 'default_username',
  password: process.env.REACT_APP_PASSWORD || 'default_password',
};

export default config;
