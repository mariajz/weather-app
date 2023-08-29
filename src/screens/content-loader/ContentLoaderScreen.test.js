import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import { mockSuccessResponse } from '../../api/weather-api/current-weather/mocks/MockSuccessResponse';
import useForcastApiResponse from '../../states/useForcastApiResponse';
import ContentLoaderScreen from './ContentLoaderScreen';

jest.mock('../../components/loader', () => {
    return {
        __esModule: true,
        default: () => {
            return <MockView>Loader</MockView>;
        },
    };
});

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: mockNavigate,
    }),
}));

jest.mock('../../states/useForcastApiResponse');

const mockHandleFetchWeather = jest.fn();
jest.mock('../../hooks/useGetCurrentWeather', () => () => ({
    handleFetchWeather: mockHandleFetchWeather,
}));

describe('ContentLoaderScreen', () => {
    beforeEach(() => {
        useForcastApiResponse.mockImplementation(() => ({
            response: mockSuccessResponse,
        }));
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render ContentLoaderScreen', () => {
        const container = render(<ContentLoaderScreen />);

        expect(container).toMatchSnapshot();
    });

    it.each`
        response               | handleFetchWeatherCalledTimes | responseType
        ${mockSuccessResponse} | ${0}                          | ${'valid and non empty'}
        ${{}}                  | ${1}                          | ${'empty object'}
        ${undefined}           | ${0}                          | ${'undefined'}
    `(
        'should call handleFetchWeather $handleFetchWeatherCalledTimes times when response is $responseType',
        ({ response, handleFetchWeatherCalledTimes }) => {
            useForcastApiResponse.mockImplementation(() => ({
                response: response,
            }));

            render(<ContentLoaderScreen />);

            expect(mockHandleFetchWeather).toHaveBeenCalledTimes(
                handleFetchWeatherCalledTimes,
            );
        },
    );

    it('should navigate to dashboard when response is valid and non empty', async () => {
        useForcastApiResponse.mockImplementation(() => ({
            response: mockSuccessResponse,
        }));

        render(<ContentLoaderScreen />);

        expect(mockNavigate).toHaveBeenCalledWith('Dashboard', {
            data: mockSuccessResponse,
        });
    });
});
