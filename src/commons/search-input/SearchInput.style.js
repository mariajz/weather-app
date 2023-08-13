import styled from 'styled-components/native';
import { Theme } from '../visual-elements';
import { TouchableOpacity } from 'react-native';

export const SearchInputWrapper = styled.View`
    background-color: ${Theme.BackgroundWhite(0.2)};
    border-radius: 10px;
    margin: 10px 10px;
    height: 40px;
    padding: 0px 10px;
`;

export const StyledTouchable = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    flex: 1;
    justify-content: space-between;
`;
