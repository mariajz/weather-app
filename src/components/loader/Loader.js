import React from 'react';
import { Animated } from 'react-native';
import { LoaderWrapper } from './Loader.style';
import { CircularLoader } from '../../../assets/animated-icons';

const Loader = () => {
    const animatedValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }),
    ).start();

    const interpolateValue = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <LoaderWrapper>
            <Animated.View
                style={{ transform: [{ rotate: interpolateValue }] }}>
                <CircularLoader />
            </Animated.View>
        </LoaderWrapper>
    );
};

export default Loader;
