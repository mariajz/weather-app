import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import Popup from './Popup';

const mockOnClose = jest.fn();
const popupProps = {
    description: 'desc',
    onClose: mockOnClose,
    title: 'Error',
};

jest.mock('../../commons/visual-elements', () => ({
    CustomIcon: () => <MockView />,
}));

jest.mock('react-native-modal', () => props => <MockView {...props} />);

describe('Popup', () => {
    it('should render Popup', () => {
        const container = render(<Popup popupProps={popupProps} />);

        expect(container).toMatchSnapshot();
    });
});
