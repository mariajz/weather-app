import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import { CustomIcon, Theme } from '../../commons/visual-elements';

export const StyledIcon = styled.View`
    padding: 7px 7px;
    margin-top: 10px;
    background-color: ${Theme.BackgroundWhite(0.5)};
    border-radius: 20px;
    height: 40px;
    width: 40px;
    position: absolute;
    right: 12px;
`;

export const ModalWrapper = styled.View`
    background-color: ${Theme.BackgroundWhite(0.2)};
    border-radius: 20px;
    height: 40px;
    margin: 10px;
`;

// TODO : fix without giving top
export const StyledModal = styled(Modal)`
    position: absolute;
    top: ${Platform.OS === 'android' ? -12 : 48}px;
    width: 85%;
`;

export const StyledTextInput = styled.TextInput`
    padding-left: 10px;
`;

export const DropDown = styled.View`
    border-radius: 10px;
    margin-top: ${Platform.OS === 'android' ? 0 : 15}px;
    background-color: white;
`;

export const Row = styled.TouchableOpacity`
    margin-left: 10px;
    flex-direction: row;
    align-items: center;
    height: 25px;
`;

export const StyledText = styled.Text`
    margin-left: 5px;
`;

export const SearchInputWrapper = styled.View`
    height: 8%;
`;

export const StyledCustomIcon = styled(CustomIcon)`
    margin: 6px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
`;
