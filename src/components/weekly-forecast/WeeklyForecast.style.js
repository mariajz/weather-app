import styled from 'styled-components/native';
import { Theme } from '../../commons/visual-elements';
import { StyledText } from '../../commons/styles';

export const CalenderWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
`;

export const WeeklyForecastWrapper = styled.View`
    background-color: ${Theme.BackgroundWhite(0.2)};
    padding: 10px 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

export const DailySummaryWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 6px 10px;
    height: 35px;
`;
export const DayText = styled(StyledText)``;
export const ChancesOfRain = styled(StyledText)`
    color: blue;
    font-size: 10px;
`;
export const MinTemperature = styled(StyledText)``;
export const MaxTemperature = styled(StyledText)``;
