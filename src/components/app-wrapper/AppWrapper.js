import { Provider } from 'jotai';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StyledSafeArea } from './AppWrapper.style';

const AppWrapper = ({ children }) => {
    return (
        <Provider>
            {Platform.OS === 'android' && (
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                />
            )}
            <StyledSafeArea>{children}</StyledSafeArea>
        </Provider>
    );
};

export default AppWrapper;
