import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
    <div className="App">
      <header className="App-header">
          {/* Header */}
          <h1>Weather App</h1>
          <div>
            {/* Search */}
            <input type="text" 
            className="search-bar" 
            placeholder="enter city..." 
            onChange={(e) => setSearch(e.target.value)}/>
            
            <button onClick={searchPressed} >Search</button></div>
          
          {/* Location */}
          <p> Miskolc </p>
          {/*Temperature*/}
          <p> 25°C </p> 
          {/*Condition*/}
          <p> Sunny </p>
          {/*Date*/}
          <p> 2021. 07. 27. </p>
          {/*Weather Icon*/}
          <img src="http://openweathermap.org/img/wn/01d.png" />
          
      </header>
    </div>
  );
}

export default App;
