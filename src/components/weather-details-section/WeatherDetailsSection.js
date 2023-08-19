import React from 'react';
import { CustomImage, CustomIcon } from '../../commons/visual-elements';
import { fetchWeatherImage } from '../../utils/helpers';
import { degreeSymbol } from '../../constants/Constants';
import {
    StyledText as ContentText,
    StyledText as WeatherCondition,
} from '../../commons/styles/CommonStyles';
import {
    LocationWrapper,
    HeadingText,
    SubHeadingText,
    WeatherDetailsWrapper,
    WeatherContentWrapper,
    ItemWrapper,
    WeatherDetailsSectionWrapper,
} from './WeatherDetailsSection.style';

const WeatherDetailsSection = ({
    locationProps,
    weatherIconProps,
    weatherDetailsProps,
    weatherSummaryProps,
}) => {
    const { locationName, region, country } = locationProps;
    const { weatherType } = weatherIconProps;
    const { temperature, condition } = weatherDetailsProps;
    const { wind, uv, humidity } = weatherSummaryProps;

    return (
        <WeatherDetailsSectionWrapper>
            <LocationWrapper>
                <HeadingText>{locationName}</HeadingText>
                <SubHeadingText>
                    {region}, {country}
                </SubHeadingText>
            </LocationWrapper>
            <CustomImage
                path={fetchWeatherImage(weatherType)}
                width={100}
                height={100}
            />
            <WeatherDetailsWrapper>
                <HeadingText>
                    {temperature}
                    {degreeSymbol}C
                </HeadingText>
                <WeatherCondition size={22}>{condition}</WeatherCondition>
            </WeatherDetailsWrapper>
            <WeatherContentWrapper>
                <ItemWrapper>
                    <CustomIcon iconName="wind" />
                    <ContentText size={18} marginLeft={5}>
                        {wind} km
                    </ContentText>
                </ItemWrapper>
                <ItemWrapper>
                    <CustomIcon iconName="humidity" />
                    <ContentText size={18} marginLeft={5}>
                        {humidity}%
                    </ContentText>
                </ItemWrapper>
                <ItemWrapper>
                    <CustomIcon iconName="sun" />
                    <ContentText size={18} marginLeft={5}>
                        {uv} UV
                    </ContentText>
                </ItemWrapper>
            </WeatherContentWrapper>
        </WeatherDetailsSectionWrapper>
    );
};

export default WeatherDetailsSection;
