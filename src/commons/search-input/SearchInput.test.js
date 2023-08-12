import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import SearchInput from './SearchInput';

jest.mock('../visual-elements', () => ({
    SearchIcon: () => <MockView />,
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
});
