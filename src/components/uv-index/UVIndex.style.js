import styled from 'styled-components/native';
import { Theme } from '../../commons/visual-elements';

export const UVIndexWrapper = styled.View`
    background-color: ${Theme.BackgroundWhite(0.2)};
    border-radius: 10px;
    width: 50%;
    height: 170px;
    padding: 10px 10px 20px 10px;
    margin-top: 15px;
    justify-content: space-between;
`;

export const TitleWrapper = styled.View`
    flex-direction: row;
`;
