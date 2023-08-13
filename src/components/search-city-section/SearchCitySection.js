import React from 'react';
import SearchInput from '../../commons/search-input';
import useGetLocations from '../../hooks/useGetLocations';

const SearchCitySection = () => {
    const { handleFetchLocations } = useGetLocations();

    const handleOnInputBoxClick = handleFetchLocations;

    return (
        <SearchInput
            placeholder="Search your city"
            handleOnClick={handleOnInputBoxClick}
        />
    );
};

export default SearchCitySection;
