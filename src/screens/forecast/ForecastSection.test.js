import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import ForecastSection from './ForecastSection';
import { mockSuccessResponse } from '../../api/weather-api/current-weather/mocks/MockSuccessResponse';

jest.mock('../../components/hourly-forecast', () => {
    return {
        __esModule: true,
        default: () => {
            return <MockView>Hourly Forcast</MockView>;
        },
    };
});
jest.mock('../../components/uv-index', () => {
    return {
        __esModule: true,
        default: ({ children }) => {
            return <MockView>UV Index</MockView>;
        },
    };
});
jest.mock('../../components/humidity-data', () => {
    return {
        __esModule: true,
        default: ({ children }) => {
            return <MockView>Humidity</MockView>;
        },
    };
});
jest.mock('../../components/feels-like-data', () => {
    return {
        __esModule: true,
        default: () => {
            return <MockView>Feels like</MockView>;
        },
    };
});
jest.mock('../../components/visibility-data', () => {
    return {
        __esModule: true,
        default: () => {
            return <MockView>Visibility</MockView>;
        },
    };
});
jest.mock('../../components/weather-details-section', () => {
    return {
        __esModule: true,
        default: () => {
            return <MockView>Weather Deatils </MockView>;
        },
    };
});
jest.mock('../../components/weekly-forecast', () => {
    return {
        __esModule: true,
        default: () => {
            return <MockView>Weekly Forecast Scroll</MockView>;
        },
    };
});

const mockSetCurrentHour = jest.fn();
jest.mock('../../states/useCurrentHour', () => () => ({
    setCurrentHour: mockSetCurrentHour,
}));

const mockSetCurrentDay = jest.fn();
jest.mock('../../states/useCurrentDay', () => () => ({
    setCurrentDay: mockSetCurrentDay,
}));

jest.mock('../../states/useForcastApiResponse');

const mockHandleFetchWeather = jest.fn();
jest.mock('../../hooks/useGetCurrentWeather', () => () => ({
    handleFetchWeather: mockHandleFetchWeather,
}));

describe('ForecastSection', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render ForecastSection', () => {
        const container = render(
            <ForecastSection data={mockSuccessResponse} />,
        );

        expect(container).toMatchSnapshot();
    });

    it('should call setCurrentHour when hour changes by 1 hour', async () => {
        jest.useFakeTimers({
            doNotFake: ['setTimeout'],
        });

        render(<ForecastSection />);

        expect(mockSetCurrentHour).toHaveBeenCalledTimes(0);
        jest.advanceTimersByTime(60000);

        expect(mockSetCurrentHour).toHaveBeenCalledTimes(1);
    });

    it('should call setCurrentDay when day changes by 1 day', async () => {
        jest.useFakeTimers({
            doNotFake: ['setTimeout'],
        });

        render(<ForecastSection />);

        expect(mockSetCurrentDay).toHaveBeenCalledTimes(0);
        jest.advanceTimersByTime(86400000);

        expect(mockSetCurrentDay).toHaveBeenCalledTimes(1);
    });
});
