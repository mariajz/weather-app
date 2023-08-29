import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import useLoading from '../../states/useLoading';
import Dashboard from './Dashboard';
import { mockSuccessResponse } from '../../api/weather-api/current-weather/mocks/MockSuccessResponse';

jest.mock('../../components/search-city-section', () => () => (
    <MockView>search city section</MockView>
));
jest.mock('../forecast', () => () => <MockView>forecast section</MockView>);
jest.mock('../../components/loader', () => () => (
    <MockView testID="loader">loader</MockView>
));
jest.mock('../../states/useLoading');

const defaultProps = {
    route: {
        params: {
            data: mockSuccessResponse,
        },
    },
};
describe('Dashboard', () => {
    it('should render Dashboard when loading state is set to false', () => {
        useLoading.mockImplementation(() => ({ loading: false }));
        const container = render(<Dashboard {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });

    it('should show loader when loading state is set to true', () => {
        useLoading.mockImplementation(() => ({ loading: true }));
        const container = render(<Dashboard {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
