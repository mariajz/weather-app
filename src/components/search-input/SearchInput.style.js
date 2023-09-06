import styled from 'styled-components/native';
import { Theme } from '../../commons/visual-elements';

export const StyledIcon = styled.View`
    padding: 10px 10px;
    margin-top: 10px;
    background-color: ${Theme.BackgroundWhite(0.5)};
    border-radius: 20px;
    height: 40px;
    width: 40px;
    align-self: flex-end;
    position: absolute;
    right: 12px;
`;
