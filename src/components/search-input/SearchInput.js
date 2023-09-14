import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CustomIcon } from '../../commons/visual-elements';
import useGetAllLocations from '../../hooks/useGetAllLocations';
import useLocationSearchApiResponse from '../../states/useLocationSearchApiResponse';
import LocationDetailRow from '../search-city-section/DetailRow';
import {
    DropDown,
    ModalWrapper,
    SearchInputWrapper,
    StyledCustomIcon,
    StyledIcon,
    StyledModal,
    StyledTextInput,
    StyledTouchableOpacity,
} from './SearchInput.style';

const SearchInput = ({ placeholder }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const [input, setInput] = useState('');
    const [searchIconPressed, setSearchIconPressed] = useState(false);
    const { response } = useLocationSearchApiResponse();
    const [locations, setLocations] = useState([]);
    const { handleFetchLocationData } = useGetAllLocations();

    const handleOnSearchIconPress = () => {
        setSearchIconPressed(!searchIconPressed);
        setShowModal(true);
    };
    const handleOnBackdropPress = () => {
        setShowDropDown(false);
        setShowModal(false);
        setSearchIconPressed(!searchIconPressed);
    };

    useEffect(() => {
        if (response.length !== 0) {
            setLocations(response);
        }
        setShowDropDown(response.length !== 0);
    }, [response]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (input.length === 0) {
                setShowDropDown(false);
            } else if (input.length > 3) {
                handleFetchLocationData(input);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [handleFetchLocationData, input]);

    const handleOnChangeText = text => {
        setInput(text);
    };

    const handleOnDropDownItemPress = () => {
        // make api call to fetch forecast data for given location
    };

    return (
        <SearchInputWrapper>
            <If condition={searchIconPressed}>
                <ModalWrapper>
                    <StyledTouchableOpacity
                        testID="text-input-wrapper"
                        onPress={() => {
                            setShowModal(true);
                        }}>
                        <View>
                            <StyledModal
                                visible={showModal}
                                testID="modal"
                                onBackdropPress={handleOnBackdropPress}>
                                <StyledTextInput
                                    placeholder={placeholder}
                                    placeholderTextColor="black"
                                    onChangeText={handleOnChangeText}
                                    value={input}
                                    testID="text-input"
                                />
                                <If condition={showDropDown}>
                                    <DropDown testID="dropdown">
                                        <If condition={locations.length > 0}>
                                            {locations.map(
                                                (location, index) => {
                                                    return (
                                                        <LocationDetailRow
                                                            index={index}
                                                            handleOnDropDownItemPress={
                                                                handleOnDropDownItemPress
                                                            }
                                                            location={location}
                                                            key={index}
                                                        />
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
