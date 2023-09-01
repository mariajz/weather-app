import React from 'react';
import { View as MockView } from 'react-native';
import { render } from '@testing-library/react-native';
import App from './App';

jest.mock('../components/app-wrapper', () => ({ children }) => (
    <MockView children={children} />
));

jest.mock('../navigations', () => () => (
    <MockView> Navigation service</MockView>
));

jest.mock('../components/global-events', () => () => (
    <MockView>Global Events</MockView>
));

describe('App', () => {
    it('should render the app', () => {
        const container = render(<App />);

        expect(container).toMatchSnapshot();
    });
});
