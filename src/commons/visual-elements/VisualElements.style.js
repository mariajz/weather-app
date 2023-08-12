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
