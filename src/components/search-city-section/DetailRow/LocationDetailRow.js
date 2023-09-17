import React from 'react';
import { CustomIcon } from '../../../commons/visual-elements';
import { Divider } from '../../../commons/styles';
import {
    Row,
    StyledText,
    LocationUnavailableRow,
} from './LocationDetailRow.style';

const LocationDetailRow = ({
    handleOnDropDownItemPress,
    location,
    locationAvailable,
}) => {
    return (
        <If condition={locationAvailable}>
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
            <Else />
            <LocationUnavailableRow testID="unavailable-row">
                <CustomIcon iconName="unavailable" size={16} tintColor="red" />
                <StyledText>
                    Weather details unavailable for entered location. Please try
                    another closer location.
                </StyledText>
            </LocationUnavailableRow>
        </If>
    );
};

export default LocationDetailRow;
