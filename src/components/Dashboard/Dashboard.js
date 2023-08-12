import React from 'react';
import { SafeAreaView } from 'react-native';
import { DashboardWrapper } from './Dashboard.style';
import SearchCitySection from '../search-city-section';

const Dashboard = () => {
    return (
        <SafeAreaView>
            <DashboardWrapper>
                <SearchCitySection />
            </DashboardWrapper>
        </SafeAreaView>
    );
};

export default Dashboard;
