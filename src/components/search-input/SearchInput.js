/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Divider } from '../../commons/styles';
import { CustomIcon, Theme } from '../../commons/visual-elements';
import { SearchInputWrapper, StyledIcon } from './SearchInput.style';

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

    // TODO
    // click outside n close
    // move styles to style file
    // click of icon

    return (
        <SearchInputWrapper>
            <View
                style={{
                    backgroundColor: Theme.BackgroundWhite(0.2),
                    borderRadius: 20,
                    height: 40,
                    padding: 10,
                    margin: 10,
                }}>
                <View>
                    <If condition={showDropDown}>
                        <View>
                            <TextInput
                                placeholder={placeholder}
                                placeholderTextColor={'black'}
                                onChangeText={handleOnChangeText}
                            />
                            <View
                                style={{
                                    borderRadius: 10,
                                    marginTop: 16,
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
                        </View>
                        <Else />
                        <TextInput
                            placeholder={placeholder}
                            placeholderTextColor={'black'}
                            onChangeText={handleOnChangeText}
                        />
                    </If>
                </View>
            </View>
            <StyledSearchIcon
                handleOnSearchIconPress={handleOnSearchIconPress}
            />
        </SearchInputWrapper>
    );
};

export default SearchInput;
