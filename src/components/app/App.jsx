import { useState, useEffect, useCallback } from 'react'
import useWeatherAPI from '../../services/WeatherAPI';

import Header from '../header/Header';
import WeatherInfo from '../weatherInfo/WeatherInfo';
import renderData from '../../utils/renderData';

import './App.scss'
import lightBg from '../../assets/light-bg.jpg';
import darkBg from '../../assets/dark-bg.jpg';

function App() {
  const [theme, setTheme] = useState('dark'),
        [city, setCity] = useState(null),
        [date, setDate] = useState(1),
        [data, setData] = useState(null);
  
  const {
    getWeather,
    process, 
    setProcess
  } = useWeatherAPI();

  useEffect(() => {
      if(city)  {
        getWeather(city, date)
          .then(setData)
          .then(() => setProcess('success'))
          .catch(() => setProcess('error'));
      }
       // eslint-disable-next-line
  }, [city, date])

  useEffect(() => {
    document.documentElement.style.setProperty('--main-color', (theme === 'dark' ? '#1B2432' : '#F4FAFF'));
    document.documentElement.style.setProperty('--secondary-color', (theme === 'dark' ? '#F4FAFF' : '#1B2432'));
    document.documentElement.style.setProperty('--btn-color', (theme === 'dark' ? '#dfd898' : '#1B2432'));
    document.body.style.backgroundImage = `url(${theme === 'dark' ? darkBg : lightBg})`;
    document.documentElement.style.setProperty('--card-color', (theme === 'dark' ? 'rgba(19, 25, 35, 0.494)' : '#f6fbff'));
  }, [theme])

  const onThemeChange = useCallback(() => {setTheme(theme === 'dark' ? 'light' : 'dark')}, [theme]);
  
  return (
    <>
      <Header onThemeChange={onThemeChange} setCity={setCity} theme={theme}/>
      <main>
        <div className="container">
          {renderData(<WeatherInfo data={data} date={date} setDate={setDate}/>, process)}
        </div>
      </main>
    </>
  )
}

export default App
