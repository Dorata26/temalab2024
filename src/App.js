import React, { useEffect, useState } from 'react';

const api = {
  key: '0cbcb3d7f93603d3da17737e0d766767',
  base: 'https://api.openweathermap.org/data/2.5/'
};

function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const currentTime = currentDate.toLocaleTimeString();

  useEffect(() => {
    if (result) {
      setTimeout(() => {
        document.querySelector('.bottom').classList.add('visible');
      }, 100);
    }
  }, [result]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => {
          console.log('Service Worker registered: ', reg);
        })
        .catch(err => {
          console.error('Service Worker registration failed: ', err);
        });
    }
  }, []);

  const searchPressed = () => {
    if (search.trim() === '') {
      alert('Please enter a location');
      return;
    }
    setResult(null);

    if (!isNaN(search)) {
      alert('Please enter a valid location');
      return;
    }
    setResult(null);

    fetch(`${api.base}weather?q=${search}&APPID=${api.key}&units=metric`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === '404') {
          alert('Location not found');
          return;
        }

        setResult(data);
        setSearch('');
        localStorage.clear();
        localStorage.setItem(data.name, JSON.stringify(data));
        document.querySelector('.bottom').classList.remove('visible');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        if (!navigator.onLine) {
          console.log('offline');
          const keys = Object.keys(localStorage);
          if (keys.length > 0) {
            const lastKey = keys[keys.length - 1];
            const storedData = JSON.parse(localStorage.getItem(lastKey));
            if (storedData) {
              setResult(storedData);
              setSearch('');
              alert(`You are offline, showing last searched location at ${formattedDate} ${currentTime}`);
              displayNotification(formattedDate, currentTime);
              const bottomElement = document.querySelector('.bottom');
              if (bottomElement) {
                bottomElement.classList.remove('visible');
              }
            }
          }
        }
      });
  };

  const displayNotification = (date, time) => {
    if (Notification.permission === 'granted') {
      const options = {
        body: `You are offline, showing the last searched location at ${date} ${time}`,
        icon: 'icon.png'
      };
      navigator.serviceWorker.getRegistration().then(reg => {
        if (reg) {
          reg.showNotification('Offline', options);
        }
      });
    } else {
      Notification.requestPermission().then(status => {
        if (status === 'granted') {
          displayNotification(date, time);
        }
      });
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
                onKeyDown={e => { if (e.key === "Enter") searchPressed() }}
                value={search}
              />
              <button onClick={searchPressed}>Search</button>
            </div>
          </div>
          <div className='data'>
            {result && (
              <div>
                <div className='location'>
                  <h1>{result.name}</h1>
                </div>
                <div className='country'>
                  <h2>{result.sys.country}</h2>
                </div>
                <div className='temp'>
                  <h1>{(result.main.temp).toFixed(0)} C°</h1>
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
              <p className='value'>{(result.main.feels_like).toFixed(0)} C°</p>
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
