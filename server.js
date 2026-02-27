/*const express = require('express');
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
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));*/


const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// 1. Run index.html when the user visits the home page (http://localhost:3000)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 2. Handle login and REDIRECT to dashboard.html
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple check (replace with real logic)
    if (username === 'admin' && password === 'password') {
        res.redirect('/dashboard?msg='+"Success"); 
    } else {
        //res.redirect('/?msg='+"Failed");
        res.render('login', { error: 'Invalid username or password' });
    }
});

// 3. Define the route that serves dashboard.html
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
