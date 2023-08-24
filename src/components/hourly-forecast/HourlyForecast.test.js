import { render } from '@testing-library/react-native';
import React from 'react';
import HourlyForecast from './HourlyForecast';

const defaultProps = {
    hourlyForecastProps: {
        forecastData: [
            {
                condition: 'Cloudy',
                temp: 21.1,
                time: '7 AM',
                twentyFourHourFormat: '2023-08-14 07:00',
                weatherImage: 13,
            },
            {
                condition: 'Sunny',
                temp: 22.2,
                time: '8 AM',
                twentyFourHourFormat: '2023-08-14 08:00',
                weatherImage: 12,
            },
            {
                condition: 'Overcast',
                temp: 25.8,
                time: '9 AM',
                twentyFourHourFormat: '2023-08-14 09:00',
                weatherImage: 13,
            },
        ],
    },
};

jest.mock('../../states/useCurrentHour', () => () => ({
    currentHour: 8,
}));

describe('HourlyForecast', () => {
    it('should render HourlyForecast', () => {
        const container = render(<HourlyForecast {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
