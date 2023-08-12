import React from 'react';
import { Text, View } from 'react-native';
import AppWrapper from '../components/AppWrapper';

const App = () => {
    return (
        <AppWrapper>
            <View>
                <Text testID="heading">Hello World!</Text>
            </View>
        </AppWrapper>
    );
};

export default App;
