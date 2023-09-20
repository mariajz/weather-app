import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../components/loader';
import useGetCurrentWeather from '../../hooks/useGetCurrentWeather';
import useForecastApiResponse from '../../states/useForecastApiResponse';

const ContentLoaderScreen = () => {
    const { handleFetchWeather } = useGetCurrentWeather();
    const { response } = useForecastApiResponse();
    const navigation = useNavigation();

    useEffect(() => {
        if (response && Object.keys(response).length === 0) {
            handleFetchWeather();
        }
    }, [handleFetchWeather, response]);

    useEffect(() => {
        if (response && Object.keys(response).length !== 0) {
            navigation.navigate({
                name: 'Dashboard',
                params: { data: response },
            });
        }
    }, [navigation, response]);

    return <Loader />;
};

export default ContentLoaderScreen;
