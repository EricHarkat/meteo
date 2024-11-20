const axios = require('axios');
const fs = require('fs');

const API_KEY = '27e79592b785e14e06e47be5d9766b06'; 
const CITY = 'Paris';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

async function fetchWeatherData() {
    try {
        const response = await axios.get(URL);
        const data = response.data;

        // Sauvegarder les données dans un fichier local
        fs.writeFileSync('./data/weather.json', JSON.stringify(data, null, 2));
        console.log('Données météo récupérées et sauvegardées.');
    } catch (error) {
        console.error('Erreur lors de la récupération des données météo:', error.message);
    }
}

fetchWeatherData();
