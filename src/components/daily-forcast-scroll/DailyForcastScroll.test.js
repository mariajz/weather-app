import { render } from '@testing-library/react-native';
import React from 'react';
import DailyForcastScroll from './DailyForcastScroll';

const defaultProps = {
    dailyForcastScrollProps: {
        forcastData: [
            { condition: 'Clear', temp: 24.9, time: '12 AM', weatherImage: 10 },
            { condition: 'Clear', temp: 24.4, time: '1 AM', weatherImage: 10 },
            { condition: 'Clear', temp: 24, time: '2 AM', weatherImage: 10 },
        ],
    },
};
describe('DailyForcastScroll', () => {
    it('should render DailyForcastScroll', () => {
        const container = render(<DailyForcastScroll {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
