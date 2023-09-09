import React from 'react';
import { CustomIcon } from '../../../commons/visual-elements';
import { Divider } from '../../../commons/styles';
import { Row, StyledText } from './LocationDetailRow.style';

const LocationDetailRow = ({ handleOnDropDownItemPress, location }) => {
    return (
        <>
            <Row
                testID="row"
                onPress={() => {
                    handleOnDropDownItemPress(location);
                }}>
                <CustomIcon iconName="pin" size={12} tintColor="black" />
                <StyledText>
                    {location?.name},{location?.country}
                </StyledText>
            </Row>
            <Divider />
        </>
    );
};

export default LocationDetailRow;
