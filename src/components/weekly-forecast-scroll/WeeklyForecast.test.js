import { render } from '@testing-library/react-native';
import React from 'react';
import WeeklyForecast from './WeeklyForecast';

const defaultProps = {
    weeklyForecastProps: {
        forecastData: [
            {
                chanceOfRain: 0,
                condition: 11,
                day: '2023-08-14',
                maxTemp: 30.8,
                minTemp: 21.1,
                willItRain: 0,
            },
            {
                chanceOfRain: 89,
                condition: 9,
                day: '2023-08-15',
                maxTemp: 28.9,
                minTemp: 20.5,
                willItRain: 1,
            },
        ],
    },
};
describe('WeeklyForecast', () => {
    it('should render WeeklyForecast', () => {
        const container = render(<WeeklyForecast {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
