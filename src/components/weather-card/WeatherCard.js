import React from 'react';
import { WeatherCardWrapper, StyledCustomImage } from './WeatherCard.style';
import { degreeSymbol } from '../../constants/Constants';
import { StyledText } from '../../commons/styles';

const WeatherCard = ({ weatherItem }) => {
    const { condition, temp, time, weatherImage } = weatherItem;

    return (
        <>
            <WeatherCardWrapper>
                <StyledText size={14}>{time}</StyledText>
                <StyledCustomImage path={weatherImage} width={40} height={40} />
                <StyledText size={14}>{condition}</StyledText>
                <StyledText size={12}>
                    {temp}
                    {degreeSymbol}C
                </StyledText>
            </WeatherCardWrapper>
        </>
    );
};

export default WeatherCard;
