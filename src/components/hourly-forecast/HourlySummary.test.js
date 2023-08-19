import { render } from '@testing-library/react-native';
import React from 'react';
import HourlySummary from './HourlySummary';

const defaultProps = {
    hourlyWeatherItem: {
        condition: 'Overcast',
        temp: 23.3,
        time: '11 PM',
        weatherImage: 11,
    },
};
describe('HourlySummary', () => {
    it('should render HourlySummary', () => {
        const container = render(<HourlySummary {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
