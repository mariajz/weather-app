import styled from 'styled-components/native';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const StyledBackgroundImage = styled(Image)`
    position: absolute;
`;

export const StyledIcon = styled(Image).attrs(props => ({
    tintColor: props.tintColor || 'white',
}))`
    width: ${props => (props.size ? props.size : 25)}px;
    height: ${props => (props.size ? props.size : 25)}px;
`;

export const StyledImage = styled(Image)`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

export const StyledGradientBar = styled(LinearGradient).attrs({
    colors: ['green', 'yellow', 'red', 'purple'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
})`
    width: 100%;
    height: 5px;
    border-radius: 5px;
`;

export const Slider = styled.View`
    position: absolute;
    background-color: white;
    width: 7px;
    height: 7px;
    margin-left: -5px;
    border-radius: 5px;
    border: 1px solid black;
    left: ${props => props.left}%;
`;
