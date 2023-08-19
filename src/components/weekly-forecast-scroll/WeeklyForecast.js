import React from 'react';
import { ScrollView } from 'react-native';
import { StyledText } from '../../commons/styles';
import { CustomIcon } from '../../commons/visual-elements';
import DailySummary from './DailySummary';
import { CalenderWrapper, WeeklyForecastWrapper } from './WeeklyForecast.style';

const WeeklyForecast = ({ weeklyForecastProps }) => {
    const { forecastData } = weeklyForecastProps;

    return (
        <WeeklyForecastWrapper>
            <CalenderWrapper>
                <CustomIcon iconName="calendar" />
                <StyledText marginLeft={5} size={12}>
                    14-DAY FORECAST
                </StyledText>
            </CalenderWrapper>
            <ScrollView showsVerticalScrollIndicator={false}>
                {forecastData.map(item => (
                    <DailySummary dailyWeatherItem={item} key={item.day} />
                ))}
            </ScrollView>
        </WeeklyForecastWrapper>
    );
};

export default WeeklyForecast;
