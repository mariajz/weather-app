import React from 'react';
import { SafeAreaView } from 'react-native';
import { DashboardWrapper } from './Dashboard.style';
import SearchCitySection from '../../components/search-city-section';
import ForcastSection from '../forcast';

const Dashboard = () => {
    return (
        <SafeAreaView>
            <DashboardWrapper>
                <SearchCitySection />
                <ForcastSection />
            </DashboardWrapper>
        </SafeAreaView>
    );
};

export default Dashboard;
