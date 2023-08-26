import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import Loader from './Loader';
import { Animated } from 'react-native';

jest.mock('../../../assets/animated-icons', () => ({
    CircularLoader: () => <MockView />,
}));

describe('Loader', () => {
    beforeEach(() => {
        const mockStart = jest.fn();
        jest.spyOn(Animated, 'loop').mockImplementation(() => ({
            start: mockStart,
        }));
    });

    it('should render Loader', () => {
        const container = render(<Loader />);

        expect(container).toMatchSnapshot();
    });
});
