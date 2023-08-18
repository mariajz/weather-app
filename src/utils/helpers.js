import { weatherImages } from '../constants/WeatherImagesMap';

const fetchWeatherImage = weatherType => {
    return weatherImages[weatherType];
};

const filterTimeFromTimestamp = timestamp => {
    const date = new Date(timestamp);
    const hour = date.getHours();
    const AMorPM = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

    return `${formattedHour} ${AMorPM}`;
};

export { fetchWeatherImage, filterTimeFromTimestamp };
