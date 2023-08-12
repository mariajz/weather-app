import React from 'react';
import {
    StyledBackgroundImage,
    StyledSearchIcon,
} from './VisualElements.style';

export const BackgroundImage = () => {
    return (
        <StyledBackgroundImage
            source={require('../../../assets/images/background.png')}
            blurRadius={100}
            resizeMode="stretch"
        />
    );
};

export const Theme = {
    BackgroundWhite: opacity => `rgba(255,255,255, ${opacity})`,
};

export const SearchIcon = () => {
    return (
        <StyledSearchIcon
            source={require('../../../assets/icons/search.png')}
        />
    );
};
