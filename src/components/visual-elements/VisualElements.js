import React from 'react';
import { StyledBackgroundImage } from './VisualElements.style';

export const BackgroundImage = () => {
    return (
        <StyledBackgroundImage
            source={require('../../../assets/background-2.png')}
            blurRadius={100}
            resizeMode="stretch"
        />
    );
};
