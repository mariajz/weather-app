import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { ContentWrapper } from './AppVersion.style';

const AppVersion = () => {
    const [appVersion, setAppVersion] = useState('0.0');
    const [appBuildNumber, setAppBuildNumber] = useState('0');

    const getVersion = async () => {
        const version = DeviceInfo.getVersion();
        setAppVersion(version);
        const buildNumber = DeviceInfo.getBuildNumber();
        setAppBuildNumber(buildNumber);
    };

    useEffect(() => {
        getVersion();
    });

    return (
        <ContentWrapper>
            <Text testID="version">{`Version ${appVersion}(${appBuildNumber})`}</Text>
        </ContentWrapper>
    );
};

export default AppVersion;
