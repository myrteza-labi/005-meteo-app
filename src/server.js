const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
const port = 3001;
const apiKey = '50341f938464fac53604f2dbc82940dc';


app.use(cors());


app.get('/weather', async (req, res) => {
try {
const city = req.query.city;
const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
const weatherData = {
temperature: response.data.main.temp,
description: response.data.weather[0].description,
};


res.json(weatherData);
} catch (error) {
console.log(error);
res.status(500).json({
error: 'Erreur lors de la récupération des données météo',
});
}
});


app.listen(port, () => {
console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
