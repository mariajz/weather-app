import { render } from '@testing-library/react-native';
import React from 'react';
import { BackgroundImage, Theme, SearchIcon } from './VisualElements';

const { BackgroundWhite } = Theme;

describe('VisualElements', () => {
    it('should render BackgroundImage', () => {
        const container = render(<BackgroundImage />);

        expect(container).toMatchSnapshot();
    });
    it('should render Theme', () => {
        const container = render(<BackgroundWhite opacity={0.2} />);

        expect(container).toMatchSnapshot();
    });
    it('should render SearchIcon', () => {
        const container = render(<SearchIcon />);

        expect(container).toMatchSnapshot();
    });
});
