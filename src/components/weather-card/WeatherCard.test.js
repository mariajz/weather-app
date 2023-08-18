import { render } from '@testing-library/react-native';
import React from 'react';
import WeatherCard from './WeatherCard';

const defaultProps = {
    weatherItem: {
        condition: 'Clear',
        temp: 24.9,
        time: '12 AM',
        weatherImage: 10,
    },
};
describe('WeatherCard', () => {
    it('should render WeatherCard', () => {
        const container = render(<WeatherCard {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
