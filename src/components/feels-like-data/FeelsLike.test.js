import { render } from '@testing-library/react-native';
import React from 'react';
import FeelsLike from './FeelsLike';

const defaultProps = {
    feelsLikeProps: {
        feelsLike: 38,
    },
};

describe('FeelsLike', () => {
    it('should render FeelsLike', () => {
        const container = render(<FeelsLike {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
