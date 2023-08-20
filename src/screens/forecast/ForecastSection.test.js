import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import ForecastSection from './ForecastSection';

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
            return <MockView>Weekly Forcast Scroll</MockView>;
        },
    };
});

describe('ForecastSection', () => {
    it('should render ForecastSection', () => {
        const container = render(<ForecastSection />);

        expect(container).toMatchSnapshot();
    });
});
