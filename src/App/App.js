import React from 'react';
import AppWrapper from '../components/app-wrapper';
import NavigationService from '../navigations';
import GlobalEvents from '../components/global-events';

const App = () => {
    return (
        <AppWrapper>
            <GlobalEvents />
            <NavigationService />
        </AppWrapper>
    );
};

export default App;
