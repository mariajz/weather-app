import React from 'react';
import WeatherDetailsCard from '../../commons/weather-details-card';
import { getHumidityText } from '../../utils/helpers';

const Humidity = ({ humidityProps }) => {
    const { humidity } = humidityProps;
    const { level, humidityText } = getHumidityText(humidity);
    const humidityCardProps = {
        iconName: 'humidity',
        cardName: 'HUMIDITY',
        title: `${humidity}%`,
        subtitle: level,
        content: humidityText,
    };

    return <WeatherDetailsCard weatherDetailsCardProps={humidityCardProps} />;
};

export default Humidity;
