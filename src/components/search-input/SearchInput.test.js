import { fireEvent, render, act } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import SearchInput from './SearchInput';
import useLocationSearchApiResponse from '../../states/useLocationSearchApiResponse';
import { mockSuccessResponse } from '../../api/weather-api/get-locations/mocks';

jest.mock('../../commons/visual-elements', () => ({
    CustomIcon: props => <MockView {...props}>Search Icon</MockView>,
    Theme: {
        BackgroundWhite: jest.fn(
            opacity => `mocked rgba(255, 255, 255, ${opacity})`,
        ),
    },
}));

jest.mock('../../states/useLocationSearchApiResponse');

jest.mock('../../commons/styles', () => ({
    Divider: () => <MockView />,
}));

const mockHandleFetchLocationData = jest.fn();
jest.mock('../../hooks/useGetAllLocations', () => () => ({
    handleFetchLocationData: mockHandleFetchLocationData,
}));

jest.mock('react-native-modal', () => ({ children, ...restProps }) => (
    <MockView {...restProps}>{children}</MockView>
));

describe('SearchInput', () => {
    beforeEach(() => {
        useLocationSearchApiResponse.mockImplementation(() => ({
            response: [],
        }));
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render SearchInput', () => {
        const container = render(<SearchInput />);

        expect(container).toMatchSnapshot();
    });

    it('should open text input on search icon press', async () => {
        const container = render(<SearchInput />);

        const { getByTestId } = container;

        getByTestId('search-icon').props.onPress();

        expect(getByTestId('text-input-wrapper')).toBeDefined();
        expect(getByTestId('text-input')).toBeDefined();
        expect(container).toMatchSnapshot();
    });

    it('should open the modal on clicking on text input and close the modal and text input on backdrop press', () => {
        const container = render(<SearchInput />);

        const { getByTestId, queryByTestId } = container;

        getByTestId('search-icon').props.onPress();

        expect(getByTestId('text-input-wrapper')).toBeDefined();
        expect(getByTestId('text-input')).toBeDefined();

        fireEvent.press(getByTestId('text-input-wrapper'));

        expect(getByTestId('modal')).toBeDefined();

        getByTestId('modal').props.onBackdropPress();

        expect(queryByTestId('text-input-wrapper')).toBeNull();
        expect(queryByTestId('modal')).toBeNull();
    });

    it('should not show dropdown when entered input text length <3', async () => {
        jest.useFakeTimers();

        useLocationSearchApiResponse.mockImplementation(() => ({
            response: [],
        }));
        const container = render(<SearchInput />);
        const { getByTestId, queryByTestId } = container;

        await act(async () => {
            getByTestId('search-icon').props.onPress();
        });

        await act(async () => {
            fireEvent.press(getByTestId('text-input-wrapper'));
        });

        await act(async () => {
            getByTestId('text-input').props.onChangeText('ab');
        });

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(getByTestId('text-input').props.value).toStrictEqual('ab');
        expect(mockHandleFetchLocationData).toHaveBeenCalledTimes(0);
        expect(queryByTestId('dropdown')).toBeNull();

        jest.useRealTimers();
    });

    it('should show dropdown when entered input text length >3 and collapse the dropdown when length is 0', async () => {
        jest.useFakeTimers();

        useLocationSearchApiResponse.mockImplementation(() => ({
            response: mockSuccessResponse,
        }));
        const container = render(<SearchInput />);
        const { getByTestId, queryByTestId } = container;

        await act(async () => {
            getByTestId('search-icon').props.onPress();
        });

        await act(async () => {
            fireEvent.press(getByTestId('text-input-wrapper'));
        });

        await act(async () => {
            getByTestId('text-input').props.onChangeText('abcd');
        });

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(getByTestId('text-input').props.value).toStrictEqual('abcd');
        expect(getByTestId('dropdown')).toBeDefined();
        expect(mockHandleFetchLocationData).toHaveBeenCalledTimes(1);

        await act(async () => {
            getByTestId('text-input').props.onChangeText('');
        });

        useLocationSearchApiResponse.mockImplementation(() => ({
            response: [],
        }));

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(getByTestId('text-input').props.value).toStrictEqual('');
        expect(queryByTestId('dropdown')).toBeNull();

        jest.useRealTimers();
    });
});
