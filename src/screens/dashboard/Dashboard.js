import React from 'react';
import { SafeAreaView } from 'react-native';
import { DashboardWrapper } from './Dashboard.style';
import SearchCitySection from '../../components/search-city-section';
import ForecastSection from '../forecast';

const Dashboard = () => {
    return (
        <SafeAreaView>
            <DashboardWrapper>
                <SearchCitySection />
                <ForecastSection />
            </DashboardWrapper>
        </SafeAreaView>
    );
};

export default Dashboard;
