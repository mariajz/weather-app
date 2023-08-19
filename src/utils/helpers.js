import { weatherImages, UVWarnings } from '../constants';

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

const getUVWarnings = uvIndex => {
    if (uvIndex >= 0 && uvIndex <= 2) {
        return {
            type: 'Low',
            warning: UVWarnings.low,
        };
    } else if (uvIndex >= 3 && uvIndex <= 5) {
        return {
            type: 'Moderate',
            warning: UVWarnings.moderate,
        };
    } else if (uvIndex > 5 && uvIndex <= 7) {
        return {
            type: 'High',
            warning: UVWarnings.high,
        };
    } else if (uvIndex > 7 && uvIndex <= 10) {
        return {
            type: 'Very High',
            warning: UVWarnings.veryHigh,
        };
    } else if (uvIndex >= 11) {
        return {
            type: 'Extreme',
            warning: UVWarnings.extreme,
        };
    } else {
        return {
            type: 'Unknown',
            warning: UVWarnings.default,
        };
    }
};

export { fetchWeatherImage, filterTimeFromTimestamp, getUVWarnings };
