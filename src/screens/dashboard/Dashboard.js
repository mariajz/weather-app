import React from 'react';
import { SafeAreaView } from 'react-native';
import { DashboardWrapper } from './Dashboard.style';
import SearchCitySection from '../../components/search-city-section';
import ForecastSection from '../forecast';
import Loader from '../../components/loader';
import useLoading from '../../states/useLoading';

const Dashboard = () => {
    const { loading } = useLoading();

    return (
        <SafeAreaView>
            <If condition={loading}>
                <Loader />
                <Else />
                <DashboardWrapper>
                    <SearchCitySection />
                    <ForecastSection />
                </DashboardWrapper>
            </If>
        </SafeAreaView>
    );
};

export default Dashboard;
