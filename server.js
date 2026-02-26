const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Dummy User Table
const USERS = [
    { username: 'admin', password: 'password123' },
    { username: 'user@example.com', password: 'spotifyclone' }
];

// Login Endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = USERS.find(u => u.username === username && u.password === password);

    if (user) {
        return res.status(200).json({ message: 'Login successful!' });
    } else {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
