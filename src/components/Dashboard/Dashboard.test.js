import { render } from '@testing-library/react-native';
import React from 'react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
    it('should render Dashboard', () => {
        const container = render(<Dashboard />);

        expect(container).toMatchSnapshot();
    });
});
