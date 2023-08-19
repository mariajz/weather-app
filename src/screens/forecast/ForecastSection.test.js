import { render } from '@testing-library/react-native';
import React from 'react';
import ForecastSection from './ForecastSection';

describe('ForecastSection', () => {
    it('should render ForecastSection', () => {
        const container = render(<ForecastSection />);

        expect(container).toMatchSnapshot();
    });
});
