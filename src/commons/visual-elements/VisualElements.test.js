import { render } from '@testing-library/react-native';
import React from 'react';
import { BackgroundImage, Theme, Icon } from './VisualElements';

const { BackgroundWhite } = Theme;

describe('VisualElements', () => {
    it('should render BackgroundImage', () => {
        const container = render(<BackgroundImage />);
        const { getByTestId } = container;

        expect(getByTestId('bgImage').props.source).toStrictEqual({
            testUri: '../../../assets/images/background.png',
        });
    });
    it('should render Theme', () => {
        const container = render(<BackgroundWhite opacity={0.2} />);

        expect(container).toMatchSnapshot();
    });
    it('should render Icon when IconName is passed', () => {
        const container = render(<Icon iconName="search" />);
        const { getByTestId } = container;

        expect(getByTestId('icon').props.source).toStrictEqual({
            testUri: '../../../assets/icons/search.png',
        });
    });
});
