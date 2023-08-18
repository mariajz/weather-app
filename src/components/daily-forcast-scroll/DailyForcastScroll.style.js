import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const CalenderWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;
export const DailyForcastScrollWrapper = styled.View`
    height: 35%;
    padding: 10px 10px;
`;

export const HorizontalScroll = styled(FlatList)`
    overflow: visible;
`;
export const HorizontalScrollWrapper = styled.View`
    width: 100%;
    flex-direction: row;
`;
