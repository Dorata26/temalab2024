import React, { useEffect, useState, useRef } from 'react';

const api = {
  key: '0cbcb3d7f93603d3da17737e0d766767',
  base: 'https://api.openweathermap.org/data/2.5/'
};

function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);
  const [animation, setAnimation] = useState('');
  const locationRef = useRef(null); // Referencia objektum létrehozása

  useEffect(() => {
    if (result) {
      setTimeout(() => {
        document.querySelector('.bottom').classList.add('visible');
      }, 100);
    }
  }, [result]);

  const searchPressed = () => {
    if (search.trim() === '') {
      alert('Please enter a location');
      return;
    }
    setResult(null);
    setAnimation(new Date().getTime().toString());

    fetch(`${api.base}weather?q=${search}&APPID=${api.key}&units=metric`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === '404') {
          alert('Location not found');
          return;
        }
        setResult(data);
        setSearch('');
        setAnimation(new Date().getTime().toString());
        adjustFontSize();
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const adjustFontSize = () => {
    if (locationRef.current) {
      const locationWidth = locationRef.current.offsetWidth;
      const containerWidth = document.querySelector('.container').offsetWidth;
      const locationText = result.name;
      const fontSize = parseFloat(window.getComputedStyle(locationRef.current).fontSize);
      if (locationWidth > containerWidth) {
        const newFontSize = fontSize * (containerWidth / locationWidth);
        locationRef.current.style.fontSize = `${newFontSize}px`;
      }
    }
  };

  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='searchContainer'>
            <div className='search'>
              <input
                type='text'
                placeholder='Enter location...'
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => {
                  "Enter" === e.key && searchPressed();
                }}
                value={search}
              />
              <button onClick={searchPressed}>Search</button>
            </div>
          </div>
          <div className='data'>
            {result && (
              <div>
                <div className='location'>
                  <h1 ref={locationRef}>{result.name}</h1>
                </div>
                <div className='conutry'>
                  <h2>{result.sys.country}</h2>
                </div>
                <div className='temp'>
                  <h1>{result.main.temp.toFixed(0)} C°</h1>
                </div>
                <div className='description'>
                  <h3>{result.weather[0].description}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
        {result && (
          <div className='bottom'>
            <div className='bottomBox'>
              <p className='header'>Feels Like</p>
              <p className='value'>{result.main.feels_like.toFixed(0)} C°</p>
            </div>
            <div className='bottomBox'>
              <p className='header'>Humidity</p>
              <p className='value'>{result.main.humidity.toFixed(0)} %</p>
            </div>
            <div className='bottomBox'>
              <p className='header'>Wind</p>
              <p className='value'>{result.wind.speed.toFixed(1)} km/h</p>
            </div>
            <div className='bottomBox'>
              <p className='header'>Min Max</p>
              <p className='value'>
                {Math.floor(result.main.temp_min).toFixed(0)} - {Math.ceil(result.main.temp_max).toFixed(0)} C°
              </p>
            </div>
            <div className='bottomBox'>
              <p className='header'>Pressure</p>
              <p className='value'>{result.main.pressure} mb</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
