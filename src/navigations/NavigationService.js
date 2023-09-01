import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BackgroundImage } from '../commons/visual-elements';
import Dashboard from '../screens/dashboard';
import ContentLoader from '../screens/content-loader';
import Permissions from '../screens/permissions';
import ExitScreen from '../screens/exit';

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
                initialRouteName="PermissionsScreen">
                <Stack.Screen
                    name="PermissionsScreen"
                    component={Permissions}
                />
                <Stack.Screen
                    name="ContentLoaderScreen"
                    component={ContentLoader}
                />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="ExitScreen" component={ExitScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationService;
