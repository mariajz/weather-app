import { render } from '@testing-library/react-native';
import React from 'react';
import CircularLoader from './CircularLoader';

describe('CircularLoader', () => {
    it('should render CircularLoader svg', () => {
        const container = render(<CircularLoader />);

        expect(container).toMatchSnapshot();
    });
});
