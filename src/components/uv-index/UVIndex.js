import React from 'react';
import { StyledText } from '../../commons/styles';
import { CustomIcon, GradientColorBar } from '../../commons/visual-elements';
import { getUVWarnings } from '../../utils/helpers';
import { TitleWrapper, UVIndexWrapper } from './UVIndex.style';

const UVIndex = ({ uvIndexProps }) => {
    const { uvIndex } = uvIndexProps;
    const { type, warning } = getUVWarnings(uvIndex);
    return (
        <>
            <UVIndexWrapper>
                <TitleWrapper>
                    <CustomIcon size={15} iconName="sun" />
                    <StyledText marginLeft={5} size={14}>
                        UV INDEX
                    </StyledText>
                </TitleWrapper>
                <StyledText size={30}>{uvIndex}</StyledText>
                <StyledText size={20}>{type}</StyledText>
                <GradientColorBar
                    sliderPosition={uvIndex}
                    minValue={0}
                    maxValue={12}
                />
                <StyledText size={10}>{warning}</StyledText>
            </UVIndexWrapper>
        </>
    );
};

export default UVIndex;
