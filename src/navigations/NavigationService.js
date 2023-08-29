import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BackgroundImage } from '../commons/visual-elements';
import Dashboard from '../screens/dashboard';
import ContentLoader from '../screens/content-loader';

const NavigationService = () => {
    const Stack = createNativeStackNavigator();
    const navTheme = {
        colors: {
            background: 'transparent',
        },
    };
    return (
        <NavigationContainer theme={navTheme}>
            <BackgroundImage />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="ContentLoaderScreen">
                <Stack.Screen
                    name="ContentLoaderScreen"
                    component={ContentLoader}
                />
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationService;
