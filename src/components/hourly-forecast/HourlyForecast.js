import React from 'react';
import { ScrollView } from 'react-native';
import { StyledText } from '../../commons/styles';
import { CustomIcon } from '../../commons/visual-elements';
import HourlySummary from './HourlySummary';
import {
    CalenderWrapper,
    HourlyForecastWrapper,
    HorizontalScrollWrapper,
} from './HourlyForecast.style';

const HourlyForecast = ({ hourlyForecastProps }) => {
    const { forecastData } = hourlyForecastProps;

    return (
        <HourlyForecastWrapper>
            <CalenderWrapper>
                <CustomIcon iconName="calendar" />
                <StyledText marginLeft={5} size={12}>
                    HOURLY FORECAST
                </StyledText>
            </CalenderWrapper>
            <HorizontalScrollWrapper>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {forecastData.map(item => (
                        <HourlySummary
                            hourlyWeatherItem={item}
                            key={item.time}
                        />
                    ))}
                </ScrollView>
            </HorizontalScrollWrapper>
        </HourlyForecastWrapper>
    );
};

export default HourlyForecast;
