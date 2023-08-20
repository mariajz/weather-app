import React from 'react';
import WeatherDetailsCard from '../../commons/weather-details-card';
import { getFeelsLikeText } from '../../utils/helpers';
import { degreeSymbol } from '../../constants/Constants';

const FeelsLike = ({ feelsLikeProps }) => {
    const { feelsLike } = feelsLikeProps;
    const { feelsLikeText } = getFeelsLikeText(feelsLike);
    const feelsLikeCardProps = {
        iconName: 'temperature',
        cardName: 'FEELS LIKE',
        title: `${feelsLike}${degreeSymbol}C`,
        subtitle: '',
        content: feelsLikeText,
    };

    return <WeatherDetailsCard weatherDetailsCardProps={feelsLikeCardProps} />;
};

export default FeelsLike;
