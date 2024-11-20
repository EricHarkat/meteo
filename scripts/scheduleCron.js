const cron = require('node-cron');
const fetchWeatherData = require('./fetchWeather');
const saveWeatherData = require('./saveToDatabase');

// Fonction pour planifier la tâche cron
function scheduleCron() {
    cron.schedule('*/1 * * * *', async () => { // Tâche cron exécutée toutes les heures
        console.log('Récupération des données météo...');
        await fetchWeatherData(); // Récupération des données depuis l'API
        saveWeatherData();        // Sauvegarde des données dans la base
        console.log('Données récupérées et enregistrées avec succès.');
    });

    console.log('Tâche cron planifiée pour récupérer les données toutes les heures.');
}

module.exports = scheduleCron;
