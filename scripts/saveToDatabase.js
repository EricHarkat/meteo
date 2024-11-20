const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('./data/weather.db', (err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err.message);
    } else {
        console.log('Connexion à la base de données SQLite établie.');
    }
});

function createTable() {
    db.run(`
        CREATE TABLE IF NOT EXISTS weather (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            city TEXT,
            temperature REAL,
            humidity INTEGER,
            description TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Erreur lors de la création de la table :', err.message);
        } else {
            console.log('Table weather créée (si elle n\'existe pas déjà).');
        }
    });
}

function saveWeatherData() {
    const data = JSON.parse(fs.readFileSync('./data/weather.json', 'utf-8'));

    const { name: city, main: { temp: temperature, humidity }, weather } = data;
    const description = weather[0].description;

    db.run(
        `INSERT INTO weather (city, temperature, humidity, description) VALUES (?, ?, ?, ?)`,
        [city, temperature, humidity, description],
        (err) => {
            if (err) return console.error(err.message);
            console.log('Données insérées dans la base.');
        }
    );
}

createTable();
saveWeatherData();
