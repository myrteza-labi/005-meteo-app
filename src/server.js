const express = require('express'); 
const cors = require('cors'); 
const axios = require('axios'); 

const app = express(); 
app.use(cors()); 
const port = 3001; 
const apiKey = '50341f938464fac53604f2dbc82940dc';

app.get('/weather', async (req, res) => {
  try {
    const city = req.query.city; 
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const weatherData = {
      temperature : response.data.main.temp, 
      description: response.data.weather[0].description,
    }
    res.json(weatherData); 
  }
  catch (error) {
    console.error(error); 
    res.status(500).json({
      error: "Erreur lors de l importation des données météo"
    })
  }
})

app.listen(port, () => {
  console.log(`Serveur en cours d'éxécution sur le port ${port}`)
})