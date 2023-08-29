import { render } from '@testing-library/react-native';
import React from 'react';
import { View as MockView } from 'react-native';
import NavigationService from './NavigationService';

jest.mock('../commons/visual-elements', () => ({
    BackgroundImage: () => <MockView>BackgroundImage</MockView>,
}));
jest.mock('../screens/dashboard', () => () => <MockView>Dashboard</MockView>);
jest.mock('../screens/permissions', () => () => (
    <MockView>Permissions</MockView>
));
jest.mock('../screens/content-loader', () => () => (
    <MockView>ContentLoader</MockView>
));

const MockNavigator = props => {
    const { children, ...restProps } = props;
    return <MockView {...restProps}>{children}</MockView>;
};
const MockScreen = props => {
    const { children, ...restProps } = props;
    return <MockView {...restProps}>{children}</MockView>;
};
jest.mock('@react-navigation/native-stack', () => ({
    createNativeStackNavigator: () => ({
        Navigator: props => <MockNavigator {...props} />,
        Screen: props => <MockScreen {...props} />,
    }),
}));
describe('NavigationService', () => {
    it('should render NavigationService', () => {
        const container = render(<NavigationService />);

        expect(container).toMatchSnapshot();
    });
});
