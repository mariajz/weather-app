import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import SearchInput from './SearchInput';

jest.mock('../../commons/visual-elements', () => ({
    CustomIcon: props => <MockView {...props}>Search Icon</MockView>,
    Theme: {
        BackgroundWhite: jest.fn(
            opacity => `mocked rgba(255, 255, 255, ${opacity})`,
        ),
    },
}));

jest.mock('../../commons/styles', () => ({
    Divider: () => <MockView />,
}));

jest.mock('react-native-modal', () => ({ children, ...restProps }) => (
    <MockView {...restProps}>{children}</MockView>
));

describe('SearchInput', () => {
    beforeEach(() => {
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

        fireEvent.press(getByTestId('text-input-wrapper'));

        expect(getByTestId('modal')).toBeDefined();

        getByTestId('modal').props.onBackdropPress();

        expect(queryByTestId('text-input-wrapper')).toBeNull();
        expect(queryByTestId('modal')).toBeNull();
    });

    it('should show dropdown when entered input text length >3 and collapse the dropdown when length is 0', () => {
        const container = render(<SearchInput />);

        const { getByTestId, queryByTestId } = container;

        getByTestId('search-icon').props.onPress();
        fireEvent.press(getByTestId('text-input-wrapper'));

        getByTestId('text-input').props.onChangeText('abcd');

        expect(getByTestId('text-input').props.value).toStrictEqual('abcd');
        expect(getByTestId('dropdown')).toBeDefined();

        getByTestId('text-input').props.onChangeText('');

        expect(getByTestId('text-input').props.value).toStrictEqual('');
        expect(queryByTestId('dropdown')).toBeNull();
    });
});
