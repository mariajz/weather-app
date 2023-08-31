import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import GlobalEvents from '../components/global-events';
import {
    showLoader,
    hideLoader,
    showPopup,
    removePopup,
} from './EventEmitter.service';

jest.mock('../components/popup', () => props => <MockView {...props} />);
jest.mock('../components/loader', () => props => <MockView {...props} />);

describe('Tests for EventEmitter.service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should add loader when showLoader is called and remove it when hideLoader is called', async () => {
        const { getByTestId, queryByTestId } = render(<GlobalEvents />);

        showLoader();

        expect(getByTestId('loader')).toBeDefined();

        hideLoader();

        expect(queryByTestId('loader')).toBeNull();
    });

    it('should show popup when showPopup is called and remove it when removePopup is called', async () => {
        const { getByTestId, queryByTestId } = render(<GlobalEvents />);

        showPopup();

        expect(getByTestId('popup')).toBeDefined();

        removePopup();

        expect(queryByTestId('popup')).toBeNull();
    });
});
