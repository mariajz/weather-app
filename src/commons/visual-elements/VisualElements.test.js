import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import {
    BackgroundImage,
    Theme,
    CustomIcon,
    CustomImage,
    GradientColorBar,
} from './VisualElements';

const { BackgroundWhite } = Theme;

jest.mock('react-native-linear-gradient', () => {
    return {
        __esModule: true,
        default: () => {
            return <MockView />;
        },
    };
});

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

    it('should render Icon when IconName and size is passed', () => {
        const container = render(<CustomIcon iconName="search" size={10} />);
        const { getByTestId } = container;

        expect(getByTestId('icon').props.source).toStrictEqual({
            testUri: '../../../assets/icons/search.png',
        });
        expect(getByTestId('icon').props.size).toStrictEqual(10);
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
    it('should render GradientColorBar', () => {
        const container = render(<GradientColorBar />);

        expect(container).toMatchSnapshot();
    });
});
