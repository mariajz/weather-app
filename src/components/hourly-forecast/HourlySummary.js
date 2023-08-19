import React from 'react';
import { StyledText } from '../../commons/styles';
import { degreeSymbol } from '../../constants/Constants';
import { CustomImage } from '../../commons/visual-elements';
import { HourlySummaryWrapper } from './HourlyForecast.style';

const HourlySummary = ({ hourlyWeatherItem }) => {
    const { weatherImage, time, temp } = hourlyWeatherItem;

    return (
        <>
            <HourlySummaryWrapper>
                <StyledText size={10}>{time}</StyledText>
                <CustomImage path={weatherImage} width={25} height={25} />
                <StyledText size={10}>
                    {temp}
                    {degreeSymbol}C
                </StyledText>
            </HourlySummaryWrapper>
        </>
    );
};

export default HourlySummary;
