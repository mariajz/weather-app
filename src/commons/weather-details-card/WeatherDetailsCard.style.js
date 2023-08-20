import styled from 'styled-components/native';
import { Theme } from '../visual-elements';

export const CardWrapper = styled.View`
    background-color: ${Theme.BackgroundWhite(0.2)};
    border-radius: 10px;
    width: 49%;
    height: 170px;
    padding: 10px 10px 20px 10px;
    margin-top: 10px;
`;

export const HeadingWrapper = styled.View`
    flex-direction: row;
`;

export const ContentWrapper = styled.View`
    justify-content: space-between;
    height: 120px;
    margin-top: 8px;
`;
