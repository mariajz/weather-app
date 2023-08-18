import styled from 'styled-components/native';
import { Image } from 'react-native';

export const StyledBackgroundImage = styled(Image)`
    position: absolute;
`;

export const StyledIcon = styled(Image).attrs({
    tintColor: 'white',
})`
    width: 25px;
    height: 25px;
`;

export const StyledImage = styled(Image)`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;
