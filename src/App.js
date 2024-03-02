
import './index.css';
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
const api = {
  key: '0cbcb3d7f93603d3da17737e0d766767',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [search, setSearch] = useState('');
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json()).then(result => { console.log(result); });
  }
  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='searchContainer'>

            <div className='search'>
              <input type='text' 
              placeholder='Enter city name...' 
              onChange={e => setSearch(e.target.value)} 
              value={search} />
              <button onClick={searchPressed}>Search</button>
              
            </div>
          </div>
          
          <div className='location'>
            <h1>Budapest</h1>
          </div>
          <div className='conutry'>
            <h2>HU</h2>
          </div>
          <div className='temp'>
            <h1>15°C</h1>
          </div>
          <div className='description'>
            <h3>Sunny</h3>
          </div>
          
        </div>
        <div className='bottom'>
          <div className='bottomBox'>
            <p class="header">Feels Like</p>
            <p class="value">12°C</p>
          </div>
          <div className='bottomBox'>
            <p class="header">Humidity</p>
            <p class="value">65 %</p>
          </div>
          <div className='bottomBox'>
            <p class="header">Wind</p>
            <p class="value">11 m/s</p>
          </div>
          <div className='bottomBox'>
            <p class="header">Min Max</p>
            <p class="value">9 - 17 °C</p>
          </div>
          <div className='bottomBox'>
            <p class="header">Pressure</p>
            <p class="value">1000 mb</p>
          </div>
        </div> 
          
      </div>
    </div>

  );
}

export default App;
