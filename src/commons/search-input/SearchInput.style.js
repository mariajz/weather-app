import styled from 'styled-components/native';
import { Theme } from '../visual-elements';

export const SearchInputWrapper = styled.View`
    background-color: ${Theme.BackgroundWhite(0.2)};
    border-radius: 10px;
    margin: 10px 10px;
    padding: 0px 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
`;
