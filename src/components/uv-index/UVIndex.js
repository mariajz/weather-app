import React from 'react';
import { GradientColorBar } from '../../commons/visual-elements';
import WeatherDetailsCard from '../../commons/weather-details-card';
import { getUVWarnings } from '../../utils/helpers';

const UVIndex = ({ uvIndexProps }) => {
    const { uvIndex } = uvIndexProps;
    const { type, warning } = getUVWarnings(uvIndex);
    const uvIndexCardProps = {
        iconName: 'sun',
        cardName: 'UV INDEX',
        title: uvIndex,
        subtitle: type,
        content: warning,
        Visual: (
            <GradientColorBar
                sliderPosition={uvIndex}
                minValue={0}
                maxValue={12}
            />
        ),
    };
    return <WeatherDetailsCard weatherDetailsCardProps={uvIndexCardProps} />;
};

export default UVIndex;
