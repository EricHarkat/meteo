const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const scheduleCron = require('./scripts/scheduleCron');
const app = express();

const db = new sqlite3.Database('./data/weather.db');

app.get('/data', (req, res) => {
    db.all('SELECT * FROM weather', [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

app.get('/data/:city', (req, res) => {
    const city = req.params.city;
    db.all('SELECT * FROM weather WHERE city = ?', [city], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

app.use(express.static('public'));

// Lancer la tâche cron
scheduleCron();


app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));
