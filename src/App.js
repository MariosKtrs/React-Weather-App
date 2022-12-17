import './App.css';
import axios from 'axios'
import React,{useState} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudRain, faCloud, faCloudBolt, faSun, faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faCloudRain, faCloud, faCloudBolt, faSun, faCloudSun)

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=+${location}+&appid=32a9e9f8454fe01212b4ed072e9ff7fa`
  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('');
  
  }

  return (
    
    <div className="App">
      <div className="container">
        <div className = "top">
          <div className = "city-search">
            <input 
            value={location}
            type="text" className="city" 
            onChange={event => setLocation(event.target.value)} 
            placeholder="Search a city"></input>
            <button onClick={searchLocation}
            className="handler">Submit</button>
          </div>
          <div className="weather-info">
            <div className="primary-weather-info">
              <div className="name-and-date">
                <h1>{data.name}</h1>
                <p>Monday,28/08/2022 12:20</p>
              </div>
              <div className="weather-container">
                <div className="weather-icon">
                <FontAwesomeIcon icon="cloud" className="primary-weather-icon"/>
                </div>
                <div className="temperature">
                  {data.main ? <p> {Math.floor(data.main.temp -273.15)}℃</p> : null }
                  {data.weather ? <p>{data.weather[0].description} </p> : null }
                  </div>
              </div>
            </div>
            <div className="secondary-weather-info">
              <div className = "react-icon">
                <img className="react" src={require('./assets/logo192.png')}/>
              </div>
              <div className = "wind-humidity">
                <ul className="primary-list">
                   {data.main ? <li>Humidity : {data.main.humidity}% </li> : null }
                   {data.wind ? <li>Wind Speed : {data.wind.speed}km/h </li> : null }
                </ul>
              </div>
            </div>
          </div>
          <div className = "extra info">
            <p> Perfect weather for pretty much anything!</p>    
          </div>
        </div>
        <div className = "bottom">
          <div className="weather-boxes">
            <div className="box">
              <p>DAY</p>
              <FontAwesomeIcon icon="cloud-sun" className="secondary-weather-icon"/>
              <p>HUMIDITY</p>
              <p>SPEED</p>
            </div>
            <div className="box">
            <p>DAY</p>
            <FontAwesomeIcon icon="cloud-sun" className="secondary-weather-icon"/>
              <p>HUMIDITY</p>
              <p>SPEED</p>
            </div>
            <div className="box">
            <p>DAY</p>
            <FontAwesomeIcon icon="cloud-sun" className="secondary-weather-icon"/>
              <p>HUMIDITY</p>
              <p>SPEED</p>
            </div>
            <div className="box">
            <p>DAY</p>
            <FontAwesomeIcon icon="cloud-sun" className="secondary-weather-icon"/>
              <p>HUMIDITY</p>
              <p>SPEED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
