import styled from 'styled-components/native';
import { CustomImage, Theme } from '../../commons/visual-elements';

export const WeatherCardWrapper = styled.View`
    background-color: ${Theme.BackgroundWhite(0.2)};
    border-radius: 5px;
    width: 100px;
    height: 150px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    margin-right: 10px;
`;

export const StyledCustomImage = styled(CustomImage)`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;
