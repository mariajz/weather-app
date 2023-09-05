import styled from 'styled-components/native';
import { Theme } from '../../commons/visual-elements';
import { TouchableOpacity } from 'react-native';

export const SearchInputWrapper = styled.View`
    height: 60px;
`;

export const StyledTouchable = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    flex: 1;
    margin: 10px 10px;
    padding-right: 2px;
    padding-left: 10px;
    border-radius: 10px;
    justify-content: space-between;
`;

export const InputWrapper = styled.View`
    background-color: ${Theme.BackgroundWhite(0.2)};
    height: 40px;
    padding: 10px 15px;
    border-radius: 20px;
    width: 100%;
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
