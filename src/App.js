import React, { useState } from 'react';
import axios from 'axios';


function App() {
const [city, setCity] = useState('');
const [weatherData, setWeatherData] = useState(null);


const getWeatherData = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/weather?city=${city}`); 
    setWeatherData(response.data); 
  }
  catch (error) {
    console.error(error); 
  }
}

const temperatureCelcius = weatherData && parseInt(weatherData.temperature - 273.15);

return (
<div>
<h1>Meteo app - Entrainement Javascript</h1>
<label htmlFor="city">Saisissez la ville </label>
<input onChange={(e) => setCity(e.target.value)} type="text" id="city"/>
{weatherData &&
<>
<h2>Météo pour la ville de {city}</h2>
<p>Température : {temperatureCelcius} </p>
<p>Déscription : {weatherData.description} </p>
</>}


<button onClick={getWeatherData}>Obtenir la météo</button>
</div>
)
}


export default App;