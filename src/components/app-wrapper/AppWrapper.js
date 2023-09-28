import { Provider } from 'jotai';
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StyledSafeArea } from './AppWrapper.style';
import AppVersion from '../app-version';

const AppWrapper = ({ children }) => {
    return (
        <Provider>
            {Platform.OS === 'android' && (
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                />
            )}
            <StyledSafeArea>
                {children}
                <AppVersion />
            </StyledSafeArea>
        </Provider>
    );
};

export default AppWrapper;
