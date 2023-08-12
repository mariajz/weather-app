import React from 'react';
import { View as MockView } from 'react-native';
import { render } from '@testing-library/react-native';
import App from './App';

jest.mock('../components/AppWrapper', () => {
    return {
        __esModule: true,
        default: ({ children }) => {
            return <MockView children={children} />;
        },
    };
});

describe('App', () => {
    it('should contain the heading', () => {
        const container = render(<App />);
        const { getByTestId } = container;

        expect(getByTestId('heading').props.children).toStrictEqual(
            'Hello World!',
        );
        expect(container).toMatchSnapshot();
    });
});
