import React, {useState} from 'react'; 
import axios from 'axios'; 

const App = () => {
  const [weatherData, setWeatherData] = useState(null); 
  const [city, setCity] = useState(''); 

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/weather?city=${city}`); 
      setWeatherData(response.data); 
    }
    catch (error) {
      console.error(error); 
    }
  }

  const temperatureCelsius = weatherData && parseInt(weatherData.temperature - 273.15)

  return (
    <div>
      <h1>App météo - Entrainement backend</h1>
      <label htmlFor="city">Saisissez la ville </label>
      <input onChange={(e) => setCity(e.target.value)}type="text" id="city" placeholder="Entrez le nom de la ville"/>
      <button onClick={getWeatherData}>Obtenir la météo</button>
      {
        weatherData &&
        <>
        <h2>Météo pour la ville de {city}</h2>
        <p>Température : {temperatureCelsius} </p>
        <p>Déscription : {weatherData.desscription} </p>
        </>
      }
    </div>
  )
}

export default App; 