import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../components/loader';
import useGetCurrentWeather from '../../hooks/useGetCurrentWeather';
import useForcastApiResponse from '../../states/useForcastApiResponse';

const ContentLoaderScreen = () => {
    const { handleFetchWeather } = useGetCurrentWeather();
    const { response } = useForcastApiResponse();
    const navigation = useNavigation();

    useEffect(() => {
        if (response && Object.keys(response).length === 0) {
            handleFetchWeather();
        }
    }, [handleFetchWeather, response]);

    useEffect(() => {
        if (response && Object.keys(response).length !== 0) {
            navigation.navigate('Dashboard', { data: response });
        }
    }, [navigation, response]);

    return <Loader />;
};

export default ContentLoaderScreen;
