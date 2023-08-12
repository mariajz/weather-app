import React from 'react';
import { TextInput } from 'react-native';
import { SearchInputWrapper } from './SearchInput.style';
import { SearchIcon } from '../visual-elements';

const SearchInput = ({ placeholder }) => {
    return (
        <SearchInputWrapper>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'black'}
            />
            <SearchIcon />
        </SearchInputWrapper>
    );
};

export default SearchInput;
