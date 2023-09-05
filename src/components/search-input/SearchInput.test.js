import { render } from '@testing-library/react-native';
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

describe('SearchInput', () => {
    it('should render SearchInput', () => {
        const container = render(<SearchInput />);

        expect(container).toMatchSnapshot();
    });

    it('should render SearchInput with input box when search icon is clicked', () => {
        const container = render(<SearchInput />);

        const { getByTestId } = container;

        getByTestId('search-icon').props.onPress();

        expect(container).toMatchSnapshot();
    });
});
