import { render } from '@testing-library/react-native';
import React from 'react';
import HourlyForecast from './HourlyForecast';

const defaultProps = {
    hourlyForecastProps: {
        forecastData: [
            { condition: 'Clear', temp: 24.9, time: '12 AM', weatherImage: 10 },
            { condition: 'Clear', temp: 24.4, time: '1 AM', weatherImage: 10 },
            { condition: 'Clear', temp: 24, time: '2 AM', weatherImage: 10 },
        ],
    },
};
describe('HourlyForecast', () => {
    it('should render HourlyForecast', () => {
        const container = render(<HourlyForecast {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
