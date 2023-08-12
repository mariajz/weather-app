import React from 'react';
import { TextInput } from 'react-native';
import { SearchInputWrapper } from './SearchInput.style';
import { Icon } from '../visual-elements';

const SearchInput = ({ placeholder }) => {
    return (
        <SearchInputWrapper>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'black'}
            />
            <Icon iconName="search" />
        </SearchInputWrapper>
    );
};

export default SearchInput;
