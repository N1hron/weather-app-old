import { useState, useMemo, useCallback } from 'react';

import './header.scss';
import newMoon from '../../assets/new-moon.png';
import fullMoon from '../../assets/full-moon.png';
import sun from '../../assets/sun.png';

export default function Header({onThemeChange, theme, setCity}) {
    const [inputValue, setInputValue] = useState('');

    const logo = useMemo(() => {
        return theme === 'dark' ? fullMoon : sun
    }, [theme])

    const onSubmit = useCallback((event) => {
        event.preventDefault();
        const formData = new FormData(event.target),
              city = Object.fromEntries(formData)['city'];
        
        if(city) {
            setCity(city);
        }
        
        setInputValue('')
    }, [])

    return (
        <header className="header">
            <h1>Weather App</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="city" 
                    placeholder='Enter your city' 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)}/>
                <button>Done!</button>
            </form>
            <img className="header__logo" src={logo} alt="New moon" onClick={onThemeChange} draggable={false}/>
        </header>
    )
}