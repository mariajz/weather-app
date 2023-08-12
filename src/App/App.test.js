import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

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
