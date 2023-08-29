import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import { mockSuccessResponse } from '../../api/weather-api/current-weather/mocks/MockSuccessResponse';
import Dashboard from './Dashboard';

jest.mock('../../components/search-city-section', () => () => (
    <MockView>search city section</MockView>
));
jest.mock('../forecast', () => () => <MockView>forecast section</MockView>);

jest.mock('../../states/useLoading');

const defaultProps = {
    route: {
        params: {
            data: mockSuccessResponse,
        },
    },
};
describe('Dashboard', () => {
    it('should render Dashboard', () => {
        const container = render(<Dashboard {...defaultProps} />);

        expect(container).toMatchSnapshot();
    });
});
