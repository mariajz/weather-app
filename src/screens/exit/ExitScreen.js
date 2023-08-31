import React from 'react';
import { Text } from 'react-native';
import { ExitContentWrapper } from './ExitScreen.style';

const ExitScreen = () => {
    return (
        <ExitContentWrapper>
            <Text testID="text">
                We have encountered an error while fetching weather details.
                Please try again after some time.
            </Text>
        </ExitContentWrapper>
    );
};

export default ExitScreen;
