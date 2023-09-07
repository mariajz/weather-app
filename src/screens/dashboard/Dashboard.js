import React from 'react';
import SearchCitySection from '../../components/search-city-section';
import ForecastSection from '../forecast';
import { DashboardWrapper } from './Dashboard.style';

const Dashboard = ({ route }) => {
    const forecastSectiondata = route.params.data;

    return (
        <DashboardWrapper>
            <SearchCitySection />
            <ForecastSection data={forecastSectiondata} />
        </DashboardWrapper>
    );
};

export default Dashboard;
