/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Divider } from '../../commons/styles';
import { CustomIcon } from '../../commons/visual-elements';
import {
    SearchInputWrapper,
    StyledIcon,
    StyledTouchable,
} from './SearchInput.style';

const StyledSearchIcon = ({ handleOnSearchIconPress, showSearchIcon }) => (
    <StyledIcon>
        <If condition={showSearchIcon}>
            <CustomIcon
                iconName="close"
                size={20}
                onPress={handleOnSearchIconPress}
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
);

const SearchInput = ({ placeholder }) => {
    const [showTextInput, setShowTextInput] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    const [locations] = useState([
        { name: 'abc', country: 'India', key: 1 },
        { name: 'abc', country: 'India', key: 2 },
        { name: 'abc', country: 'India', key: 3 },
        { name: 'abc', country: 'India', key: 4 },
        { name: 'abc', country: 'India', key: 5 },
        { name: 'abc', country: 'India', key: 6 },
    ]);

    const handleOnSearchIconPress = () => {
        setShowTextInput(!showTextInput);
    };

    const handleOnChangeText = data => {
        if (data.length === 0) {
            setShowDropDown(false);
        }
        if (data.length > 3) {
            // make api call to fetch locations, check for locations.length
            if (locations.length !== 0) {
                setShowDropDown(true);
            } else {
                setShowDropDown(false);
            }
        }
    };

    const handleOnDropDownItemPress = location => {
        // make api call to fetch forecast data
    };

    return (
        <SearchInputWrapper>
            <StyledTouchable>
                <View style={{ width: '100%' }}>
                    <If condition={showDropDown}>
                        <Modal
                            visible={showDropDown}
                            onBackdropPress={() => setShowDropDown(false)}
                            style={{
                                position: 'absolute',
                                top: 50,
                            }}>
                            <TextInput
                                placeholder={placeholder}
                                placeholderTextColor={'black'}
                                onChangeText={handleOnChangeText}
                            />
                            <View
                                style={{
                                    borderRadius: 10,
                                    marginTop: 12,
                                    backgroundColor: 'white',
                                }}>
                                <If
                                    condition={
                                        showDropDown && locations.length > 0
                                    }>
                                    {locations.map((location, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        handleOnDropDownItemPress(
                                                            location,
                                                        );
                                                    }}
                                                    style={{
                                                        flexDirection: 'row',
                                                        marginLeft: 10,
                                                        alignItems: 'center',
                                                        height: 25,
                                                    }}>
                                                    <CustomIcon
                                                        iconName="pin"
                                                        size={12}
                                                        tintColor="black"
                                                    />
                                                    <Text
                                                        style={{
                                                            marginLeft: 5,
                                                        }}>
                                                        {location?.name},
                                                        {location?.country}
                                                    </Text>
                                                </TouchableOpacity>
                                                <Divider />
                                            </React.Fragment>
                                        );
                                    })}
                                </If>
                            </View>
                        </Modal>
                        <Else />
                        <TextInput
                            placeholder={placeholder}
                            placeholderTextColor={'black'}
                            onChangeText={handleOnChangeText}
                        />
                    </If>
                </View>
            </StyledTouchable>
            <StyledSearchIcon
                handleOnSearchIconPress={handleOnSearchIconPress}
            />
        </SearchInputWrapper>
    );
};

export default SearchInput;
