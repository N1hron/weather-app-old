import { useState, useMemo, useCallback, memo } from 'react';
import PropTypes from 'prop-types';

import './header.scss';
import fullMoon from '../../assets/full-moon.png';
import sun from '../../assets/sun.png';

const MemoHeader = memo(function Header({onThemeChange, theme, setCity}) {
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
        // eslint-disable-next-line
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
})

MemoHeader.propTypes = {
    onThemeChange: PropTypes.func,
    theme: PropTypes.string,
    setCity: PropTypes.func
}

export default MemoHeader;