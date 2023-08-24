import { render } from '@testing-library/react-native';
import React from 'react';
import WeeklyForecast from './WeeklyForecast';

const defaultProps = {
    weeklyForecastProps: {
        forecastData: [
            {
                chanceOfRain: 89,
                condition: 11,
                day: '2023-08-15',
                maxTemp: 28.9,
                minTemp: 20.5,
                willItRain: 1,
            },
            {
                chanceOfRain: 88,
                condition: 11,
                day: '2023-08-16',
                maxTemp: 29.2,
                minTemp: 19.8,
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
