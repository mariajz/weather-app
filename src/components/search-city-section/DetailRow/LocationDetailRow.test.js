import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import LocationDetailRow from './LocationDetailRow';

jest.mock('../../../commons/visual-elements', () => ({
    CustomIcon: props => <MockView {...props}>Search Icon</MockView>,
}));

jest.mock('../../../commons/styles', () => ({
    Divider: () => <MockView>Divider</MockView>,
}));

const mockHandleOnDropDownItemPress = jest.fn();
const defaultProps = {
    location: { country: 'India', key: 5, name: 'Delhi' },
    handleOnDropDownItemPress: mockHandleOnDropDownItemPress,
};

describe('LocationDetailRow', () => {
    it('should render LocationDetailRow', () => {
        const container = render(<LocationDetailRow {...defaultProps} />);
        const { getByTestId } = container;

        expect(container).toMatchSnapshot();

        fireEvent.press(getByTestId('row'));

        expect(mockHandleOnDropDownItemPress).toHaveBeenCalledTimes(1);
    });
});
