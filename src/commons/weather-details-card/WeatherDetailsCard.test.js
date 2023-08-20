import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import WeatherDetailsCard from './WeatherDetailsCard';

const weatherDetailsCardProps = {
    iconName: 'humidity',
    cardName: 'HUMIDITY',
    title: '51%',
    subtitle: 'Moderate',
    content: 'Pleasent weather',
    Visual: <></>,
};

jest.mock('../../commons/visual-elements', () => ({
    CustomIcon: () => <MockView />,
    Theme: {
        BackgroundWhite: jest.fn(
            opacity => `mocked rgba(255, 255, 255, ${opacity})`,
        ),
    },
}));

describe('WeatherDetailsCard', () => {
    it('should render WeatherDetailsCard', () => {
        const container = render(
            <WeatherDetailsCard
                weatherDetailsCardProps={weatherDetailsCardProps}
            />,
        );

        expect(container).toMatchSnapshot();
    });

    it('should render WeatherDetailsCard when subtitle and content are optional', () => {
        const modifiedProps = {
            iconName: 'humidity',
            cardName: 'HUMIDITY',
            title: '51%',
            Visual: <></>,
        };
        const container = render(
            <WeatherDetailsCard weatherDetailsCardProps={modifiedProps} />,
        );

        expect(container).toMatchSnapshot();
    });
});
