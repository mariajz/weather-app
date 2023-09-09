import React from 'react';
import useGetAllLocations from '../../hooks/useGetAllLocations';
import SearchInput from '../search-input';

const SearchCitySection = () => {
    const { handleFetchLocations } = useGetAllLocations();

    const handleOnInputBoxClick = handleFetchLocations;

    return (
        <SearchInput
            placeholder="Search your city"
            handleOnClick={handleOnInputBoxClick}
        />
    );
};

export default SearchCitySection;
