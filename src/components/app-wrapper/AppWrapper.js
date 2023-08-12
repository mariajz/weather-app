import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { BackgroundImage } from '../visual-elements';

const AppWrapper = ({ children }) => {
    return (
        <>
            {Platform.OS === 'android' && (
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                />
            )}
            <BackgroundImage />
            {children}
        </>
    );
};

export default AppWrapper;
