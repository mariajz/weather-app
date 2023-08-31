import { render } from '@testing-library/react-native';
import React from 'react';
import ExitScreen from './ExitScreen';

describe('ExitScreen', () => {
    it('should render ExitScreen', () => {
        const container = render(<ExitScreen />);

        expect(container).toMatchSnapshot();
    });
});
