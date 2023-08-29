import React from 'react';
import { SafeAreaView } from 'react-native';
import SearchCitySection from '../../components/search-city-section';
import ForecastSection from '../forecast';
import { DashboardWrapper } from './Dashboard.style';

const Dashboard = ({ route }) => {
    const forecastSectiondata = route.params.data;
    return (
        <SafeAreaView>
            <DashboardWrapper>
                <SearchCitySection />
                <ForecastSection data={forecastSectiondata} />
            </DashboardWrapper>
        </SafeAreaView>
    );
};

export default Dashboard;
