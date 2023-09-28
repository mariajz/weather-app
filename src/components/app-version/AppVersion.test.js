import React from 'react';
import AppVersion from './AppVersion';
import { render } from '@testing-library/react-native';

jest.mock('react-native-device-info', () => ({
    getVersion: () => '1.0',
    getBuildNumber: () => '2',
}));

describe('AppVersion', () => {
    it('Should render AppVersion', () => {
        const container = render(<AppVersion />);

        const { getByTestId } = container;

        expect(container).toMatchSnapshot();
        expect(getByTestId('version').props.children).toBe('Version 1.0(2)');
    });
});
