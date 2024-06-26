const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/authMiddleware');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));

const hardcodedUser = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
};

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === hardcodedUser.email && password === hardcodedUser.password) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ user: { email }, token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

app.get('/register', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
