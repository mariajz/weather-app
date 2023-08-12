import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import AppWrapper from './AppWrapper';

jest.mock('../visual-elements', () => ({
    BackgroundImage: () => <MockView />,
}));

describe('AppWrapper', () => {
    it('should render SafeArea for android and ios', () => {
        const container = render(<AppWrapper />);

        expect(container).toMatchSnapshot();
    });
});
