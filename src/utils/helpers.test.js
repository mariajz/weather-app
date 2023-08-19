import {
    fetchWeatherImage,
    filterTimeFromTimestamp,
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
        uvIndex | resultType    | resultWarning
        ${1}    | ${'Low'}      | ${'Minimal risk of harm. Enjoy outdoor activities without special precautions'}
        ${5}    | ${'Moderate'} | ${'Some risk of harm. Wear sunglasses and use sunscreen'}
        ${7}    | ${'High'}     | ${'Avoid outdoor activities during peak sun hours'}
        ${11}   | ${'Extreme'}  | ${'Stay indoors. If not, use maximum sun protection'}
        ${-1}   | ${'Unknown'}  | ${''}
    `(
        'should return type as $resultType and warning as $resultWarning when uv index $uvIndex',
        ({ resultType, resultWarning, uvIndex }) => {
            const result = getUVWarnings(uvIndex);

            const { type, warning } = result;

            expect(type).toStrictEqual(resultType);
            expect(warning).toStrictEqual(resultWarning);
        },
    );
});
