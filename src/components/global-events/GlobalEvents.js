import React, { useEffect, useState } from 'react';
import Emitter from 'tiny-emitter/instance';
import { events } from '../../constants';
import Loader from '../loader';
import Popup from '../popup';

const GlobalEvents = () => {
    const [showLoader, setShowLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popup, setPopup] = useState({});

    useEffect(() => {
        Emitter.on(events.SHOW_LOADER, () => {
            setShowLoader(true);
        });
        Emitter.on(events.HIDE_LOADER, () => {
            setShowLoader(false);
        });
        Emitter.on(events.SHOW_POPUP, popupProps => {
            setShowPopup(true);
            setPopup(popupProps);
        });
        Emitter.on(events.REMOVE_POPUP, () => {
            setShowPopup(false);
        });
    }, []);

    return (
        <>
            <If condition={showPopup}>
                <Popup popupProps={popup} testID="popup" />
            </If>
            <If condition={showLoader}>
                <Loader testID="loader" />
            </If>
        </>
    );
};

export default GlobalEvents;
