import React, { useState } from 'react';
import { TextInput } from 'react-native';
import {
    SearchInputWrapper,
    StyledTouchable,
    StyledIcon,
    InputWrapper,
} from './SearchInput.style';
import { CustomIcon } from '../../commons/visual-elements';

const StyledSearchIcon = ({ handleOnSearchIconPress }) => (
    <StyledIcon>
        <CustomIcon
            testID="search-icon"
            iconName="search"
            onPress={handleOnSearchIconPress}
            tintColor="black"
        />
    </StyledIcon>
);

const SearchInput = ({ placeholder, handleOnClick: handleOnInputBoxPress }) => {
    const [showSearch, setShowSearch] = useState(false);

    const handleOnSearchIconPress = () => {
        setShowSearch(!showSearch);
    };

    return (
        <SearchInputWrapper>
            <If condition={showSearch}>
                <StyledTouchable onPress={handleOnInputBoxPress}>
                    <InputWrapper>
                        <TextInput
                            placeholder={placeholder}
                            placeholderTextColor={'black'}
                        />
                    </InputWrapper>
                </StyledTouchable>
            </If>
            <StyledSearchIcon
                handleOnSearchIconPress={handleOnSearchIconPress}
            />
        </SearchInputWrapper>
    );
};

export default SearchInput;
