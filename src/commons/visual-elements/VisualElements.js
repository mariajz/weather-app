import React from 'react';
import { StyledBackgroundImage, StyledIcon } from './VisualElements.style';
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

export const Icon = ({ iconName }) => {
    const path = icons[iconName];
    return <StyledIcon testID="icon" source={path} />;
};
