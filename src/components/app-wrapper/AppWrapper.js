import { Provider } from 'jotai';
import React from 'react';
import { Platform, StatusBar } from 'react-native';

const AppWrapper = ({ children }) => {
    return (
        <Provider>
            {Platform.OS === 'android' && (
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                />
            )}
            {children}
        </Provider>
    );
};

export default AppWrapper;
