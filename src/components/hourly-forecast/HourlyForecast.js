import React from 'react';
import { ScrollView } from 'react-native';
import { StyledText } from '../../commons/styles';
import { CustomIcon } from '../../commons/visual-elements';
import useCurrentHour from '../../states/useCurrentHour';
import { filterForecastDataFromCurrentHour } from '../../utils/helpers';
import {
    CalenderWrapper,
    HorizontalScrollWrapper,
    HourlyForecastWrapper,
} from './HourlyForecast.style';
import HourlySummary from './HourlySummary';

const HourlyForecast = ({ hourlyForecastProps }) => {
    const { forecastData } = hourlyForecastProps;
    const { currentHour } = useCurrentHour();

    const filteredForecastData = filterForecastDataFromCurrentHour(
        forecastData,
        currentHour,
    );

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
                    {filteredForecastData.map(item => (
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
