import { fetchWeatherImage, filterTimeFromTimestamp } from './helpers';

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
});
