import { render } from '@testing-library/react-native';
import React from 'react';
import DailySummary from './DailySummary';

const defaultProps = {
    dailyWeatherItem: {
        chanceOfRain: 0,
        condition: 10,
        day: '2023-08-27',
        maxTemp: 25.6,
        minTemp: 20.2,
        willItRain: 0,
    },
};
describe('DailySummary', () => {
    it('should render DailySummary', () => {
        const container = render(<DailySummary {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
