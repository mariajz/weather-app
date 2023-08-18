import React from 'react';
import { StyledText } from '../../commons/styles';
import { CustomIcon } from '../../commons/visual-elements';
import WeatherCard from '../weather-card';
import {
    CalenderWrapper,
    DailyForcastScrollWrapper,
    HorizontalScroll,
    HorizontalScrollWrapper,
} from './DailyForcastScroll.style';

const DailyForcastScroll = ({ dailyForcastScrollProps }) => {
    const { forecastData } = dailyForcastScrollProps;

    return (
        <DailyForcastScrollWrapper>
            <CalenderWrapper>
                <CustomIcon iconName="calendar" />
                <StyledText marginLeft={5} size={14}>
                    Today's forcast
                </StyledText>
            </CalenderWrapper>
            <HorizontalScrollWrapper>
                <HorizontalScroll
                    horizontal
                    data={forecastData}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <WeatherCard weatherItem={item} />;
                    }}
                />
            </HorizontalScrollWrapper>
        </DailyForcastScrollWrapper>
    );
};

export default DailyForcastScroll;
