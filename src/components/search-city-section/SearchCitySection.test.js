import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import SearchCitySection from './SearchCitySection';

jest.mock('../../commons/search-input/SearchInput', () => {
    return {
        __esModule: true,
        default: () => <MockView />,
    };
});
jest.mock('../../hooks/useGetLocations', () => () => ({
    handleFetchLocations: jest.fn(),
}));

describe('SearchCitySection', () => {
    it('should render SearchCitySection', () => {
        const container = render(<SearchCitySection />);

        expect(container).toMatchSnapshot();
    });
});
