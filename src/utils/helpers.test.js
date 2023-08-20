import {
    fetchWeatherImage,
    filterTimeFromTimestamp,
    getFeelsLikeText,
    getHumidityText,
    getUVWarnings,
} from './helpers';

describe('Helpers', () => {
    it('should filterTimeFromTimestamp', () => {
        const result = filterTimeFromTimestamp('2023-08-14 16:00');

        expect(result).toStrictEqual('4 PM');
    });

    it('should fetchWeatherImage', () => {
        const result = fetchWeatherImage('Sunny');

        expect(result).toStrictEqual({
            testUri: '../../../assets/images/sun.png',
        });
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
        'should return type as $resultType and warning as $resultWarning when feels like temperature is $feelsLike celcius',
        ({ resultWarning, feelsLike }) => {
            const result = getFeelsLikeText(feelsLike);

            const { feelsLikeText } = result;

            expect(feelsLikeText).toStrictEqual(resultWarning);
        },
    );
});
