const INPUT_CITY = document.getElementById('input-city-weather');
const BUTTON_GET_WEATHER = document.getElementById('btn-get-weather');
const WEATHER_RESULT = document.getElementById('weather-result');

const API_KEY = 'cae91f8d295414d4c0e4b206863ededb';

BUTTON_GET_WEATHER.onclick = () => { 
    if(INPUT_CITY.value === '') {
        WEATHER_RESULT.innerHTML = 'Введите название города!';
    }
    else if(INPUT_CITY.value.length === 1) {
        WEATHER_RESULT.innerHTML = 'Название города должно состоять из не менее двух символов!';
    }
    else {
        // Делаем запрос по API для получения погоды
    }
}
