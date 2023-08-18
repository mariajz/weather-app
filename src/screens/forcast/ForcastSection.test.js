import { render } from '@testing-library/react-native';
import React from 'react';
import ForcastSection from './ForcastSection';

describe('ForcastSection', () => {
    it('should render ForcastSection', () => {
        const container = render(<ForcastSection />);

        expect(container).toMatchSnapshot();
    });
});
