import { render } from '@testing-library/react-native';
import React from 'react';
import { BackgroundImage } from './VisualElements';

describe('AppWrapper', () => {
    it('should render BackgroundImage', () => {
        const container = render(<BackgroundImage />);

        expect(container).toMatchSnapshot();
    });
});
