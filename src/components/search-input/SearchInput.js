import React from 'react';
import { TextInput } from 'react-native';
import { SearchInputWrapper, StyledTouchable } from './SearchInput.style';
import { CustomIcon } from '../../commons/visual-elements';

const SearchInput = ({ placeholder, handleOnClick }) => {
    return (
        <SearchInputWrapper>
            <StyledTouchable onPress={handleOnClick}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'black'}
                />
                <CustomIcon iconName="search" />
            </StyledTouchable>
        </SearchInputWrapper>
    );
};

export default SearchInput;
