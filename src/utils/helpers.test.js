import {
    fetchWeatherImage,
    filterTimeFromTimestamp,
    getFeelsLikeText,
    getHumidityText,
    getUVWarnings,
    getVisibilityText,
    filterHourFromTimestamp,
    convertToTwelveHourFormat,
    filterForecastDataFromCurrentHour,
    filterDayFromTimestamp,
} from './helpers';

describe('Helpers', () => {
    it('should filterTimeFromTimestamp', () => {
        const result = filterTimeFromTimestamp('2023-08-14 16:00');

        expect(result).toStrictEqual('4 PM');
    });

    it('should filterDayFromTimestamp', () => {
        const result = filterDayFromTimestamp('2023-08-14');

        expect(result).toStrictEqual(14);
    });

    it('should fetchWeatherImage', () => {
        const result = fetchWeatherImage('Sunny');

        expect(result).toStrictEqual({
            testUri: '../../../assets/images/sun.png',
        });
    });

    it('should filterHourFromTimestamp', () => {
        const result = filterHourFromTimestamp('2023-08-14 16:00');

        expect(result).toStrictEqual(16);
    });

    it.each`
        hour  | result
        ${16} | ${'4 PM'}
        ${10} | ${'10 AM'}
        ${12} | ${'12 PM'}
        ${24} | ${'12 AM'}
    `(
        'should return result as $result when hour is $hour',
        ({ result, hour }) => {
            const convertedHour = convertToTwelveHourFormat(hour);

            expect(convertedHour).toStrictEqual(result);
        },
    );

    it('should filterForecastDataFromCurrentHour', () => {
        const result = filterForecastDataFromCurrentHour(
            [
                {
                    condition: 'Clear',
                    temp: 24.9,
                    time: '12 AM',
                    twentyFourHourFormat: '2023-08-14 00:00',
                    weatherImage: 12,
                },
                {
                    condition: 'Clear',
                    temp: 24.4,
                    time: '1 AM',
                    twentyFourHourFormat: '2023-08-14 01:00',
                    weatherImage: 12,
                },
                {
                    condition: 'Clear',
                    temp: 24.4,
                    time: '8 AM',
                    twentyFourHourFormat: '2023-08-14 08:00',
                    weatherImage: 12,
                },
                {
                    condition: 'Clear',
                    temp: 24.4,
                    time: '9 AM',
                    twentyFourHourFormat: '2023-08-14 09:00',
                    weatherImage: 12,
                },
            ],
            8,
        );

        expect(result).toStrictEqual([
            {
                condition: 'Clear',
                temp: 24.4,
                time: '8 AM',
                twentyFourHourFormat: '2023-08-14 08:00',
                weatherImage: 12,
            },
            {
                condition: 'Clear',
                temp: 24.4,
                time: '9 AM',
                twentyFourHourFormat: '2023-08-14 09:00',
                weatherImage: 12,
            },
        ]);
    });

    it.each`
        uvIndex | resultType     | resultWarning
        ${1}    | ${'Low'}       | ${'Minimal risk of harm. Enjoy outdoor activities without special precautions.'}
        ${5}    | ${'Moderate'}  | ${'Some risk of harm. Wear sunglasses and use sunscreen.'}
        ${7}    | ${'High'}      | ${'Avoid outdoor activities during peak sun hours.'}
        ${10}   | ${'Very High'} | ${'Very high risk of harm. Seek shade and use broad-spectrum sunscreen.'}
        ${11}   | ${'Extreme'}   | ${'Stay indoors. If not, use maximum sun protection.'}
        ${-1}   | ${'Unknown'}   | ${''}
    `(
        'should return type as $resultType and warning as $resultWarning when uv index is $uvIndex',
        ({ resultType, resultWarning, uvIndex }) => {
            const result = getUVWarnings(uvIndex);

            const { type, warning } = result;

            expect(type).toStrictEqual(resultType);
            expect(warning).toStrictEqual(resultWarning);
        },
    );

    it.each`
        humidity | resultType    | resultWarning
        ${40}    | ${'Low'}      | ${'Might lead to dry skin and discomfort. Remember to stay hydrated and moisturize.'}
        ${60}    | ${'Moderate'} | ${'The humidity is within a comfortable range, making for a pleasant atmosphere.'}
        ${80}    | ${'High'}     | ${'Be sure to stay cool, hydrated, and seek shade if possible.'}
    `(
        'should return type as $resultType and warning as $resultWarning when humidity is $humidity percent',
        ({ resultType, resultWarning, humidity }) => {
            const result = getHumidityText(humidity);

            const { level, humidityText } = result;

            expect(level).toStrictEqual(resultType);
            expect(humidityText).toStrictEqual(resultWarning);
        },
    );
    it.each`
        feelsLike | resultWarning
        ${35}     | ${'Air feels dry and crisp today as humidity levels remain low.'}
        ${42}     | ${'Humidity is making it feel hotter.'}
    `(
        'should return warning as $resultWarning when feels like temperature is $feelsLike celcius',
        ({ resultWarning, feelsLike }) => {
            const result = getFeelsLikeText(feelsLike);

            const { feelsLikeText } = result;

            expect(feelsLikeText).toStrictEqual(resultWarning);
        },
    );
    it.each`
        visibility | resultWarning
        ${0.8}     | ${'Visibility is severely limited due to dense fog. Drive cautiously and use low-beam headlights.'}
        ${3}       | ${'Moderate fog is causing slightly reduced visibility.'}
        ${10}      | ${"It's perfectly clear right now."}
    `(
        'should return warning as $resultWarning when visibility is $visibility km',
        ({ resultWarning, visibility }) => {
            const result = getVisibilityText(visibility);

            const { visibilityText } = result;

            expect(visibilityText).toStrictEqual(resultWarning);
        },
    );
});
