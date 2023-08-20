import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../styles';
import { CustomIcon } from '../visual-elements';
import {
    CardWrapper,
    ContentWrapper,
    HeadingWrapper,
} from './WeatherDetailsCard.style';

const WeatherDetailsCard = ({ weatherDetailsCardProps }) => {
    const {
        iconName,
        cardName,
        title,
        subtitle = '',
        content = '',
        Visual = <></>,
    } = weatherDetailsCardProps;
    return (
        <CardWrapper>
            <HeadingWrapper>
                <CustomIcon size={15} iconName={iconName} />
                <StyledText marginLeft={5} size={14}>
                    {cardName}
                </StyledText>
            </HeadingWrapper>
            <ContentWrapper>
                <View>
                    <StyledText size={28}>{title}</StyledText>
                    <StyledText size={20}>{subtitle}</StyledText>
                </View>

                <View>{Visual}</View>
                <StyledText size={10}>{content}</StyledText>
            </ContentWrapper>
        </CardWrapper>
    );
};

export default WeatherDetailsCard;
