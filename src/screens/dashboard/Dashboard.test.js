import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import useLoading from '../../states/useLoading';
import Dashboard from './Dashboard';

jest.mock('../../components/search-city-section', () => {
    return {
        __esModule: true,
        default: () => <MockView>search city section</MockView>,
    };
});
jest.mock('../forecast', () => {
    return {
        __esModule: true,
        default: () => <MockView>forecast section</MockView>,
    };
});
jest.mock('../../components/loader', () => {
    return {
        __esModule: true,
        default: () => <MockView testID="loader">loader</MockView>,
    };
});
jest.mock('../../states/useLoading');

describe('Dashboard', () => {
    it('should render Dashboard when loading state is set to false', () => {
        useLoading.mockImplementation(() => ({ loading: false }));
        const container = render(<Dashboard />);

        expect(container).toMatchSnapshot();
    });

    it('should show loader when loading state is set to true', () => {
        useLoading.mockImplementation(() => ({ loading: true }));
        const container = render(<Dashboard />);

        expect(container).toMatchSnapshot();
    });
});
