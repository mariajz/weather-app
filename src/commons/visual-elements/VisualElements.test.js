import { render } from '@testing-library/react-native';
import React from 'react';
import {
    BackgroundImage,
    Theme,
    CustomIcon,
    CustomImage,
} from './VisualElements';

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
        const container = render(<CustomIcon iconName="search" />);
        const { getByTestId } = container;

        expect(getByTestId('icon').props.source).toStrictEqual({
            testUri: '../../../assets/icons/search.png',
        });
    });

    it('should render CustomImage when props are passed', () => {
        const container = render(
            <CustomImage
                path="../../../assets/images/sun.png"
                width={30}
                height={30}
            />,
        );
        const { getByTestId } = container;

        expect(getByTestId('image').props.source).toStrictEqual(
            '../../../assets/images/sun.png',
        );
    });
});
