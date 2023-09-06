import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider } from '../../commons/styles';
import { CustomIcon } from '../../commons/visual-elements';
import {
    DropDown,
    ModalWrapper,
    Row,
    SearchInputWrapper,
    StyledCustomIcon,
    StyledIcon,
    StyledModal,
    StyledText,
    StyledTextInput,
    StyledTouchableOpacity,
} from './SearchInput.style';

const SearchInput = ({ placeholder }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const [searchIconPressed, setSearchIconPressed] = useState(false);

    const [locations] = useState([
        { name: 'abc', country: 'India', key: 1 },
        { name: 'abc', country: 'India', key: 2 },
        { name: 'abc', country: 'India', key: 3 },
        { name: 'abc', country: 'India', key: 4 },
        { name: 'abc', country: 'India', key: 5 },
    ]);

    const handleOnSearchIconPress = () => {
        setSearchIconPressed(!searchIconPressed);
        setShowModal(true);
    };

    const handleOnChangeText = data => {
        if (data.length === 0) {
            setShowDropDown(false);
        }
        if (data.length > 3) {
            // make api call to fetch locations
            if (locations.length !== 0) {
                setShowDropDown(true);
            } else {
                setShowDropDown(false);
            }
        }
    };

    const handleOnDropDownItemPress = () => {
        // make api call to fetch forecast data
    };

    return (
        <SearchInputWrapper>
            <If condition={searchIconPressed}>
                <ModalWrapper>
                    <StyledTouchableOpacity
                        onPress={() => {
                            setShowModal(true);
                        }}>
                        <View>
                            <StyledModal
                                visible={showModal}
                                onBackdropPress={() => {
                                    setShowDropDown(false);
                                    setShowModal(false);
                                    setSearchIconPressed(!searchIconPressed);
                                }}>
                                <StyledTextInput
                                    placeholder={placeholder}
                                    placeholderTextColor="black"
                                    onChangeText={handleOnChangeText}
                                />
                                <If condition={showDropDown}>
                                    <DropDown>
                                        <If condition={locations.length > 0}>
                                            {locations.map(
                                                (location, index) => {
                                                    return (
                                                        <React.Fragment
                                                            key={index}>
                                                            <Row
                                                                onPress={() => {
                                                                    handleOnDropDownItemPress(
                                                                        location,
                                                                    );
                                                                }}>
                                                                <CustomIcon
                                                                    iconName="pin"
                                                                    size={12}
                                                                    tintColor="black"
                                                                />
                                                                <StyledText>
                                                                    {
                                                                        location?.name
                                                                    }
                                                                    ,
                                                                    {
                                                                        location?.country
                                                                    }
                                                                </StyledText>
                                                            </Row>
                                                            <Divider />
                                                        </React.Fragment>
                                                    );
                                                },
                                            )}
                                        </If>
                                    </DropDown>
                                </If>
                            </StyledModal>
                        </View>
                    </StyledTouchableOpacity>
                </ModalWrapper>
            </If>
            <StyledIcon>
                <If condition={searchIconPressed}>
                    <StyledCustomIcon
                        iconName="close"
                        onPress={handleOnSearchIconPress}
                        tintColor="black"
                        size="14"
                    />
                    <Else />
                    <CustomIcon
                        testID="search-icon"
                        iconName="search"
                        onPress={handleOnSearchIconPress}
                        tintColor="black"
                    />
                </If>
            </StyledIcon>
        </SearchInputWrapper>
    );
};

export default SearchInput;
