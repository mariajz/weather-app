import styled from 'styled-components/native';
import { Theme } from '../../commons/visual-elements';

export const CalenderWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;
export const HourlyForecastWrapper = styled.View`
    padding: 10px 10px;
    margin-bottom: 15px;
    background-color: ${Theme.BackgroundWhite(0.2)};
    border-radius: 10px;
`;

export const HorizontalScrollWrapper = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const HourlySummaryWrapper = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    height: 60px;
    max-width: 60px;
`;
