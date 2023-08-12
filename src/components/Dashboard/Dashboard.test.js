import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import Dashboard from './Dashboard';

jest.mock('../search-city-section', () => {
    return {
        __esModule: true,
        default: () => <MockView />,
    };
});

describe('Dashboard', () => {
    it('should render Dashboard', () => {
        const container = render(<Dashboard />);

        expect(container).toMatchSnapshot();
    });
});