import React from 'react';
import {
    fetchWeatherImage,
    filterTimeFromTimestamp,
} from '../../utils/helpers';
import { ForCastSectionWrapper } from './ForcastSection.style';
import DailyForcastScroll from '../../components/daily-forcast-scroll';
import WeatherDetailsSection from '../../components/weather-details-section';
import { mockSuccessResponse } from '../../api/weather-api/current-weather/mocks';

const ForcastSection = () => {
    const data = mockSuccessResponse;
    const locationProps = {
        locationName: data.location.name,
        region: data.location.region,
        country: data.location.country,
    };
    const weatherIconProps = { weatherType: data.current.condition.text };
    const weatherDetailsProps = {
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
    };
    const weatherSummaryProps = {
        wind: data.current.wind_kph,
        uv: data.current.uv,
        humidity: data.current.humidity,
    };

    const fetchTodaysForcastData = forecastData =>
        forecastData.map(item => ({
            temp: item.temp_c,
            condition: item.condition.text,
            time: filterTimeFromTimestamp(item.time),
            weatherImage: fetchWeatherImage(item.condition.text),
        }));

    const dailyForcastScrollProps = {
        forecastData: fetchTodaysForcastData(data.forecast.forecastday[0].hour),
    };

    return (
        <>
            <ForCastSectionWrapper>
                <WeatherDetailsSection
                    locationProps={locationProps}
                    weatherIconProps={weatherIconProps}
                    weatherDetailsProps={weatherDetailsProps}
                    weatherSummaryProps={weatherSummaryProps}
                    dailyForcastScrollProps={dailyForcastScrollProps}
                />
                <DailyForcastScroll
                    dailyForcastScrollProps={dailyForcastScrollProps}
                />
            </ForCastSectionWrapper>
        </>
    );
};

export default ForcastSection;
