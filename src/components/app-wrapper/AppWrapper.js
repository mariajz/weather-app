import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { BackgroundImage } from '../../commons/visual-elements';
import { Provider } from 'jotai';

const AppWrapper = ({ children }) => {
    return (
        <Provider>
            {Platform.OS === 'android' && (
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                />
            )}
            <BackgroundImage />
            {children}
        </Provider>
    );
};

export default AppWrapper;
