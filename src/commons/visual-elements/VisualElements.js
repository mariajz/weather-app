import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
    StyledBackgroundImage,
    StyledIcon,
    StyledImage,
    StyledGradientBar,
    Slider,
} from './VisualElements.style';
import { icons } from '../../../assets/icons';

export const BackgroundImage = () => {
    return (
        <StyledBackgroundImage
            source={require('../../../assets/images/background.png')}
            blurRadius={100}
            resizeMode="stretch"
            testID="bgImage"
        />
    );
};

export const Theme = {
    BackgroundWhite: opacity => `rgba(255,255,255, ${opacity})`,
};

export const CustomIcon = ({ iconName, size, tintColor, onPress }) => {
    const path = icons[iconName];
    return (
        <If condition={onPress}>
            <TouchableOpacity onPress={onPress}>
                <StyledIcon
                    testID="icon"
                    source={path}
                    size={size}
                    tintColor={tintColor}
                />
            </TouchableOpacity>
            <Else />
            <StyledIcon
                testID="icon"
                source={path}
                size={size}
                tintColor={tintColor}
            />
        </If>
    );
};

export const CustomImage = ({ path, width, height }) => {
    return (
        <StyledImage
            testID="image"
            source={path}
            width={width}
            height={height}
        />
    );
};

export const GradientColorBar = ({ minValue, maxValue, sliderPosition }) => {
    const range = maxValue - minValue;
    const normalizedValue = (sliderPosition - minValue) / range;
    let calculatedLeft = normalizedValue * 100;
    calculatedLeft = calculatedLeft > 100 ? 100 : calculatedLeft;
    calculatedLeft = calculatedLeft < 0 ? 0 : calculatedLeft;

    return (
        <View>
            <StyledGradientBar />
            <Slider left={calculatedLeft} />
        </View>
    );
};
