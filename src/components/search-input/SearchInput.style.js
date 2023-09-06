import styled from 'styled-components/native';
import { Theme } from '../../commons/visual-elements';

export const SearchInputWrapper = styled.View`
    height: 60px;
`;

export const StyledTouchable = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 10px;
    justify-content: space-between;
    background-color: ${Theme.BackgroundWhite(0.2)};
    border-radius: 20px;
    height: 40px;
    padding: 10px 15px;
`;

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
