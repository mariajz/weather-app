import { Text } from 'react-native';
import styled from 'styled-components/native';

export const ContentWrapper = styled.View`
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    flex-direction: row;
    flex: 1;
    max-height: 100px;
    justify-content: space-between;
`;

export const StyledTitle = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Content = styled.View`
    flex-direction: column;
`;
