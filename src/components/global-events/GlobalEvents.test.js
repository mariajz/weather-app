import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import GlobalEvents from './GlobalEvents';
import Emitter from 'tiny-emitter/instance';
import { events } from '../../constants';

jest.mock('../popup', () => props => <MockView {...props} />);
jest.mock('../loader', () => props => <MockView {...props} />);

describe('GlobalEvents', () => {
    it('should render null if no events are emitted', () => {
        const container = render(<GlobalEvents />);

        expect(container).toMatchSnapshot();
    });

    it('should render loader when SHOW_LOADER is emitted', () => {
        const { getByTestId } = render(<GlobalEvents />);

        Emitter.emit(events.SHOW_LOADER, {});

        expect(getByTestId('loader')).toBeDefined();
    });

    it('should remove loader when HIDE_LOADER is emitted', () => {
        const { queryByTestId } = render(<GlobalEvents />);

        Emitter.emit(events.HIDE_LOADER, {});

        expect(queryByTestId('loader')).toBeNull();
    });

    it('should render popup when SHOW_POPUP is emitted', () => {
        const { getByTestId } = render(<GlobalEvents />);

        Emitter.emit(events.SHOW_POPUP, {});

        expect(getByTestId('popup')).toBeDefined();
    });

    it('should remove popup when REMOVE_POPUP is emitted', () => {
        const { queryByTestId } = render(<GlobalEvents />);

        Emitter.emit(events.REMOVE_POPUP, {});

        expect(queryByTestId('popup')).toBeNull();
    });
});
