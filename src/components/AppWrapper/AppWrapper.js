import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';

const AppWrapper = ({ children }) => {
    return (
        <>
            {Platform.OS === 'android' && (
                <StatusBar barStyle="light-content" backgroundColor="maroon" />
            )}
            <SafeAreaView>{children}</SafeAreaView>
        </>
    );
};

export default AppWrapper;
