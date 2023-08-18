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

jest.mock('../screens/dashboard', () => {
    return {
        __esModule: true,
        default: ({ children }) => {
            return <MockView />;
        },
    };
});

describe('App', () => {
    it('should contain the heading', () => {
        const container = render(<App />);

        expect(container).toMatchSnapshot();
    });
});
