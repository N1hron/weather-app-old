import clouds from '../../assets/clouds.svg';
import fewClouds from '../../assets/few-clouds.svg';
import mist from '../../assets/mist.svg';
import rain from '../../assets/rain.svg';
import snow from '../../assets/snow.svg';
import sun from '../../assets/sun.svg';
import thunderstorm from '../../assets/thunderstorm.svg';

export default function weatherImg(type) {
    switch(type) {
        case 'clear sky':
            return sun;
        case 'few clouds':
            return fewClouds;
        case 'scattered clouds':
            return clouds;
        case 'broken clouds':
            return clouds;
        case 'overcast clouds':
            return clouds;
        case 'shower rain':
            return rain;
        case 'rain':
            return rain;
        case 'thunderstorm':
            return thunderstorm;
        case 'snow':
            return snow;
        case 'mist':
            return mist;
        default:
            return '';
    }
}