/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CustomIcon } from '../../commons/visual-elements';
import useGetAllLocations from '../../hooks/useGetAllLocations';
import useGetCurrentWeather from '../../hooks/useGetCurrentWeather';
import useLocationSearchApiResponse from '../../states/useLocationSearchApiResponse';
import useSearchLocation from '../../states/useSearchLocation';
import useUserInput from '../../states/useUserInput';
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
    const { response, error, setError } = useLocationSearchApiResponse();
    const [locations, setLocations] = useState([]);
    const { handleFetchLocationData } = useGetAllLocations();
    const { searchLocation, setSearchLocation } = useSearchLocation();
    const { userInput, setUserInput } = useUserInput();
    const { handleFetchWeather } = useGetCurrentWeather();

    const handleOnSearchIconPress = () => {
        setSearchIconPressed(true);
        setShowModal(true);
        setError(false);
    };

    const handleOnBackdropPress = () => {
        setShowDropDown(false);
        setShowModal(false);
        setSearchIconPressed(false);
        setLocations([]);
    };

    useEffect(() => {
        if (response?.length !== 0) {
            setLocations(response);
        }
        setShowDropDown(response !== undefined);
    }, [response]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (input.length === 0) {
                setShowDropDown(false);
            } else if (input.length > 3) {
                setUserInput(input);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [input, response, setUserInput]);

    const handleOnChangeText = text => {
        setInput(text);
    };

    useEffect(() => {
        if (error) {
            setSearchIconPressed(false);
        }
    }, [error]);

    useEffect(() => {
        if (searchLocation) {
            handleFetchWeather();
        }
    }, [searchLocation]);

    useEffect(() => {
        if (userInput) {
            handleFetchLocationData(userInput);
        }
    }, [userInput]);

    const handleOnDropDownItemPress = async ({ lat, lon }) => {
        setSearchLocation(`${lat},${lon}`);
        handleOnBackdropPress();
    };

    const ModalContent = (
        <>
            <StyledTextInput
                placeholder={placeholder}
                placeholderTextColor="black"
                onChangeText={handleOnChangeText}
                value={input}
                testID="text-input"
            />
            <If condition={showDropDown}>
                <DropDown testID="dropdown">
                    <If condition={locations?.length > 0}>
                        {locations.map((location, index) => {
                            return (
                                <LocationDetailRow
                                    index={index}
                                    locationAvailable
                                    handleOnDropDownItemPress={() =>
                                        handleOnDropDownItemPress(location)
                                    }
                                    testID={`item-${index}`}
                                    location={location}
                                    key={index}
                                />
                            );
                        })}
                        <Else />
                        <LocationDetailRow
                            testID="item-unavailable"
                            locationAvailable={false}
                        />
                    </If>
                </DropDown>
            </If>
        </>
    );

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
                            <If condition={!error}>
                                <StyledModal
                                    visible={showModal}
                                    testID="modal"
                                    onBackdropPress={handleOnBackdropPress}>
                                    {ModalContent}
                                </StyledModal>
                            </If>
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
