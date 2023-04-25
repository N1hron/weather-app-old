import clouds from '../assets/clouds.svg';
import fewCloudsDay from '../assets/few-clouds-day.svg';
import fewCloudsNight from '../assets/few-clouds-night.svg';
import mist from '../assets/mist.svg';
import rain from '../assets/rain.svg';
import snow from '../assets/snow.svg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import thunder from '../assets/thunderstorm.svg';

export default function setWeatherImg(code, timeOfDay) {
    if([1000].includes(code)) return timeOfDay === 'day' ? sun : moon
    else if([1003].includes(code)) return timeOfDay === 'day' ? fewCloudsDay : fewCloudsNight
    else if([1006, 1009].includes(code)) return clouds
    else if([1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(code)) return rain
    else if([1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264].includes(code)) return snow
    else if([1087, 1273, 1276, 1279, 1282].includes(code)) return thunder
    else if([1030, 1135, 1147].includes(code)) return mist
}