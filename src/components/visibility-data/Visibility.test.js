import { render } from '@testing-library/react-native';
import React from 'react';
import Visibility from './Visibility';

const defaultProps = {
    visibilityProps: {
        visibility: 17,
    },
};

describe('Visibility', () => {
    it('should render Visibility', () => {
        const container = render(<Visibility {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
