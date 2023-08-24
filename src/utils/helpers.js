import { weatherImages, UVWarnings } from '../constants';

const fetchWeatherImage = weatherType => {
    return weatherImages[weatherType];
};

const filterForecastDataFromCurrentHour = (forecastData, currentHour) => {
    return forecastData.filter(item => {
        const hour = filterHourFromTimestamp(item.twentyFourHourFormat);
        return hour >= currentHour;
    });
};

const filterHourFromTimestamp = timestamp => {
    const date = new Date(timestamp);
    const hour = date.getHours();
    return hour;
};

const filterDayFromTimestamp = timestamp => {
    const day = new Date(timestamp).getDate();
    return day;
};

const convertToTwelveHourFormat = hour => {
    const AMorPM = hour >= 12 && hour !== 24 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

    return `${formattedHour} ${AMorPM}`;
};

const filterTimeFromTimestamp = timestamp => {
    const filteredHour = filterHourFromTimestamp(timestamp);
    const convertedHour = convertToTwelveHourFormat(filteredHour);
    return convertedHour;
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

const getHumidityText = humidity => {
    if (humidity <= 40) {
        return {
            level: 'Low',
            humidityText:
                'Might lead to dry skin and discomfort. Remember to stay hydrated and moisturize.',
        };
    } else if (humidity > 40 && humidity <= 60) {
        return {
            level: 'Moderate',
            humidityText:
                'The humidity is within a comfortable range, making for a pleasant atmosphere.',
        };
    } else {
        return {
            level: 'High',
            humidityText:
                'Be sure to stay cool, hydrated, and seek shade if possible.',
        };
    }
};

const getFeelsLikeText = feelsLike => {
    if (feelsLike <= 40) {
        return {
            feelsLikeText:
                'Air feels dry and crisp today as humidity levels remain low.',
        };
    } else {
        return {
            feelsLikeText: 'Humidity is making it feel hotter.',
        };
    }
};

const getVisibilityText = visibility => {
    if (visibility <= 0.8) {
        return {
            visibilityText:
                'Visibility is severely limited due to dense fog. Drive cautiously and use low-beam headlights.',
        };
    } else if (visibility > 0.8 && visibility < 3.2) {
        return {
            visibilityText:
                'Moderate fog is causing slightly reduced visibility.',
        };
    } else {
        return {
            visibilityText: "It's perfectly clear right now.",
        };
    }
};

export {
    fetchWeatherImage,
    filterHourFromTimestamp,
    filterTimeFromTimestamp,
    filterDayFromTimestamp,
    convertToTwelveHourFormat,
    getUVWarnings,
    getHumidityText,
    getFeelsLikeText,
    getVisibilityText,
    filterForecastDataFromCurrentHour,
};
