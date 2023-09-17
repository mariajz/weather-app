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
    locationAvailable: true,
    handleOnDropDownItemPress: mockHandleOnDropDownItemPress,
};

describe('LocationDetailRow', () => {
    it('should render LocationDetailRow when locationAvailable is true', () => {
        const container = render(<LocationDetailRow {...defaultProps} />);
        const { getByTestId } = container;

        expect(container).toMatchSnapshot();

        fireEvent.press(getByTestId('row'));

        expect(mockHandleOnDropDownItemPress).toHaveBeenCalledTimes(1);
    });

    it('should render LocationUnavailableRow when locationAvailable is false', () => {
        const modifiedProps = {
            locationAvailable: false,
        };
        const container = render(<LocationDetailRow {...modifiedProps} />);
        const { getByTestId } = container;

        expect(getByTestId('unavailable-row')).toBeDefined();
        expect(container).toMatchSnapshot();
    });
});
