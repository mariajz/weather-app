import { render } from '@testing-library/react-native';
import React from 'react';
import AppWrapper from './AppWrapper';

describe('AppWrapper', () => {
    it('should render SafeArea for android and ios', () => {
        const container = render(<AppWrapper />);

        expect(container).toMatchSnapshot();
    });
});
