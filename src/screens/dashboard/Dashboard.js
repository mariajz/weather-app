import React from 'react';
import { SafeAreaView } from 'react-native';
import Loader from '../../components/loader';
import SearchCitySection from '../../components/search-city-section';
import useLoading from '../../states/useLoading';
import ForecastSection from '../forecast';
import { DashboardWrapper } from './Dashboard.style';

const Dashboard = ({ route }) => {
    const { loading } = useLoading();
    const forecastSectiondata = route.params.data;

    return (
        <SafeAreaView>
            <If condition={loading}>
                <Loader />
                <Else />
                <DashboardWrapper>
                    <SearchCitySection />
                    <ForecastSection data={forecastSectiondata} />
                </DashboardWrapper>
            </If>
        </SafeAreaView>
    );
};

export default Dashboard;
