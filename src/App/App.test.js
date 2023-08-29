import React from 'react';
import { View as MockView } from 'react-native';
import { render } from '@testing-library/react-native';
import App from './App';

jest.mock('../components/app-wrapper', () => {
    return {
        __esModule: true,
        default: ({ children }) => {
            return <MockView children={children} />;
        },
    };
});

jest.mock('../navigations', () => {
    return {
        __esModule: true,
        default: ({ children }) => {
            return <MockView> Navigation service</MockView>;
        },
    };
});

describe('App', () => {
    it('should renser the app', () => {
        const container = render(<App />);

        expect(container).toMatchSnapshot();
    });
});
