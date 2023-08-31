import Emitter from 'tiny-emitter/instance';
import { events } from '../constants';

const showLoader = (params = {}) => Emitter.emit(events.SHOW_LOADER, params);

const hideLoader = (params = null) => Emitter.emit(events.HIDE_LOADER, params);

const showPopup = popupProps => Emitter.emit(events.SHOW_POPUP, popupProps);

const removePopup = (params = null) =>
    Emitter.emit(events.REMOVE_POPUP, params);

export { showLoader, hideLoader, showPopup, removePopup };
