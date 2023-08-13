import React from 'react';
import { TextInput } from 'react-native';
import { SearchInputWrapper, StyledTouchable } from './SearchInput.style';
import { Icon } from '../visual-elements';

const SearchInput = ({ placeholder, handleOnClick }) => {
    return (
        <SearchInputWrapper>
            <StyledTouchable onPress={handleOnClick}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'black'}
                />
                <Icon iconName="search" />
            </StyledTouchable>
        </SearchInputWrapper>
    );
};

export default SearchInput;
