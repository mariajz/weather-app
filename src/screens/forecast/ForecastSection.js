import React from 'react';
import {
    fetchWeatherImage,
    filterTimeFromTimestamp,
} from '../../utils/helpers';
import { ForecastSectionWrapper } from './ForecastSection.style';
import HourlyForecast from '../../components/hourly-forecast';
import WeatherDetailsSection from '../../components/weather-details-section';
import { mockSuccessResponse } from '../../api/weather-api/current-weather/mocks';
import WeeklyForecast from '../../components/weekly-forecast-scroll';
import { ScrollView } from 'react-native';

const ForecastSection = () => {
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

    const fetchTodaysForecastData = forecastData =>
        forecastData.map(item => ({
            temp: item.temp_c,
            condition: item.condition.text,
            time: filterTimeFromTimestamp(item.time),
            weatherImage: fetchWeatherImage(item.condition.text),
        }));

    const fetchWeeklyForecastData = forecastData =>
        forecastData.map(item => ({
            maxTemp: item.day.maxtemp_c,
            minTemp: item.day.mintemp_c,
            willItRain: item.day.daily_will_it_rain,
            chanceOfRain: item.day.daily_chance_of_rain,
            day: item.date,
            condition: fetchWeatherImage(item.day.condition.text),
        }));

    const hourlyForecastProps = {
        forecastData: fetchTodaysForecastData(
            data.forecast.forecastday[0].hour,
        ),
    };

    const weeklyForecastProps = {
        forecastData: fetchWeeklyForecastData(data.forecast.forecastday),
    };

    return (
        <>
            <ForecastSectionWrapper>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <WeatherDetailsSection
                        locationProps={locationProps}
                        weatherIconProps={weatherIconProps}
                        weatherDetailsProps={weatherDetailsProps}
                        weatherSummaryProps={weatherSummaryProps}
                    />
                    <HourlyForecast hourlyForecastProps={hourlyForecastProps} />
                    <WeeklyForecast weeklyForecastProps={weeklyForecastProps} />
                </ScrollView>
            </ForecastSectionWrapper>
        </>
    );
};

export default ForecastSection;
