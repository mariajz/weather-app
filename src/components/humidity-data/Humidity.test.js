import { render } from '@testing-library/react-native';
import React from 'react';
import Humidity from './Humidity';

const defaultProps = {
    humidityProps: {
        humidity: 70,
    },
};

describe('Humidity', () => {
    it('should render Humidity', () => {
        const container = render(<Humidity {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
