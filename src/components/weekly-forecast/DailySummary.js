import React from 'react';
import { View as WeatherIconWrapper } from 'react-native';
import {
    ChancesOfRain,
    DailySummaryWrapper,
    DayText,
    MaxTemperature,
    MinTemperature,
} from './WeeklyForecast.style';
import { Divider } from '../../commons/styles';
import { degreeSymbol } from '../../constants/Constants';
import { CustomImage } from '../../commons/visual-elements';

const DailySummary = ({ dailyWeatherItem }) => {
    const { maxTemp, minTemp, willItRain, chanceOfRain, day, condition } =
        dailyWeatherItem;

    return (
        <>
            <Divider />
            <DailySummaryWrapper>
                <DayText>{day}</DayText>
                <WeatherIconWrapper>
                    <CustomImage path={condition} width={20} height={20} />
                    <If condition={willItRain}>
                        <ChancesOfRain>{chanceOfRain}%</ChancesOfRain>
                    </If>
                </WeatherIconWrapper>
                <MinTemperature>
                    {minTemp}
                    {degreeSymbol}C
                </MinTemperature>
                <MaxTemperature>
                    {maxTemp}
                    {degreeSymbol}C
                </MaxTemperature>
            </DailySummaryWrapper>
        </>
    );
};

export default DailySummary;
