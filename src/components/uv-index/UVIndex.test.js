import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import UVIndex from './UVIndex';

const defaultProps = {
    uvIndexProps: {
        uvIndex: 5,
    },
};

jest.mock('../../commons/visual-elements', () => ({
    CustomIcon: () => <MockView />,
    Theme: {
        BackgroundWhite: jest.fn(
            opacity => `mocked rgba(255, 255, 255, ${opacity})`,
        ),
    },
    GradientColorBar: () => <MockView />,
}));

describe('UVIndex', () => {
    it('should render UVIndex', () => {
        const container = render(<UVIndex {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
