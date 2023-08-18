import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import Dashboard from './Dashboard';

jest.mock('../../components/search-city-section', () => {
    return {
        __esModule: true,
        default: () => <MockView>search city section</MockView>,
    };
});
jest.mock('../forcast', () => {
    return {
        __esModule: true,
        default: () => <MockView>forcast section</MockView>,
    };
});
describe('Dashboard', () => {
    it('should render Dashboard', () => {
        const container = render(<Dashboard />);

        expect(container).toMatchSnapshot();
    });
});
