const express = require('express');
const sql = require('sqlite3').verbose();
const path = require('path');
const port = 3000;

var db = new sql.Database('./users.db');
//db.run('DROP TABLE IF EXISTS users');
db.run('CREATE TABLE IF NOT EXISTS users (username TEXT NOT NULL, password TEXT NOT NULL)');

const app = express();
app.use(express.urlencoded({ extended: true })); // Middleware to parse incoming POST data
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '')); // Optional: Set views directory

// Serve the main (home) page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/about', async (req, res) => {
    const user = await getUserById(req.query.user_id);
    res.render('about', {user: user});
});

app.get('/org', async (req, res) => {
    const user = await getUserById(req.query.user_id);
    res.render('org', {user: user});
});

app.get('/volunteer-opp', async (req, res) => {
    const user = await getUserById(req.query.user_id);
    const volunteers = await getAllVolunteers(req.query.user_id);
    console.log("Vounteers", volunteers)
    res.render('volunteer-opp', {user, volunteers});
});

app.get('/profile', async (req, res) => {
    const user = await getUserById(req.query.user_id);
    const donations = await getUserDonationsById(req.query.user_id);
    const asked = await getUserAskedById(req.query.user_id);
    const asker = await getUserAskerById(req.query.user_id);
    const volunteers = await getAllVolunteers(req.query.user_id);
    res.render('profile', {user, donations, asked, asker, volunteers});
});

// Endpoint to fetch and display user account information
app.get('/profile', (req, res) => {
    db.all('SELECT DISTINCT username, password FROM users', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error fetching user data');
        } else {
            res.json(rows); // Send user data as JSON response
        }
    });
});

// Handle saving user data
app.post('/save', (req, res) => {
    const user_name = req.body.sign_up_username;
    const password2 = req.body.sign_up_password;
    db.run(`INSERT INTO volunteers(username, password) VALUES (?, ?)`, [user_name, password2], (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error sending user data');
        } else {
            res.send('Successfully Sent');
        }
    });
});

// Handle saving user data
app.post('/volunteer-ask', (req, res) => {
    const asker_id = req.body.asker_id;
    const asked_id = req.body.asked_id;
    const amount = req.body.amount;
    db.run(`INSERT INTO ask_table(asker_id, asked_id, amount) VALUES (${asker_id}, ${asked_id}, ${amount})`, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error sending user data');
        } else {
            res.send('Successfully Sent');
        }
    });
    
});

// Handle loggin users in
app.post('/login-user', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.all(`SELECT * FROM volunteers WHERE username = '${username}' and password = '${password}'`, (err, data) => {
        if (err) {
            console.error("Here:", err);
            res.status(500).send('Error logging user in. Wrong password.');
        } else {
            if (data.length == 0) {
                res.status(404).send('User not found');
            }

            const user = data[0];
            res.render('main', { user: user });

        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM volunteers WHERE id = ${id}`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                return resolve(data[0]);
            }
        });
    });
}
const getAllVolunteers = async (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM volunteers WHERE id != ${id}`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                return resolve(data);
            }
        });
    });
}

const getUserDonationsById = async (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM donations WHERE user_id = ${id}`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                return resolve(data);
            }
        });
    });
}

const getUserAskedById = async (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM ask_table WHERE asked_id = ${id}`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                return resolve(data);
            }
        });
    });
}

const getUserAskerById = async (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM ask_table WHERE asker_id = ${id}`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                return resolve(data);
            }
        });
    });
}