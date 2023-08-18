import { render } from '@testing-library/react-native';
import React from 'react';
import WeatherDetailsSection from './WeatherDetailsSection';

const defaultProps = {
    locationProps: {
        country: 'United States of America',
        locationName: 'Manhatten',
        region: 'New York',
    },
    weatherIconProps: {
        weatherType: 'Sunny',
    },
    weatherDetailsProps: {
        condition: 'Sunny',
        temperature: 27.8,
    },
    weatherSummaryProps: {
        humidity: 51,
        uv: 6,
        wind: 3.6,
    },
};
describe('WeatherDetailsSection', () => {
    it('should render WeatherDetailsSection', () => {
        const container = render(<WeatherDetailsSection {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
