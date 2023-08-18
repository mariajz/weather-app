import styled from 'styled-components/native';

export const StyledText = styled.Text`
    color: white;
    font-size: ${({ size }) => (size ? size : 12)}px;
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)}px;
`;
