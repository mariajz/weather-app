import React from 'react';
import WeatherDetailsCard from '../../commons/weather-details-card';
import { getVisibilityText } from '../../utils/helpers';

const Visibility = ({ visibilityProps }) => {
    const { visibility } = visibilityProps;
    const { visibilityText } = getVisibilityText(visibility);
    const feelsLikeCardProps = {
        iconName: 'visibility',
        cardName: 'VISIBILITY',
        title: `${visibility} km`,
        subtitle: '',
        content: visibilityText,
    };

    return <WeatherDetailsCard weatherDetailsCardProps={feelsLikeCardProps} />;
};

export default Visibility;
