import React from 'react';
import SearchInput from '../search-input';
import useGetAllLocations from '../../hooks/useGetAllLocations';

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
