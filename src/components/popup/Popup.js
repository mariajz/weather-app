import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { CustomIcon } from '../../commons/visual-elements';
import { Content, ContentWrapper, StyledTitle } from './Popup.style';

const Popup = ({ popupProps }) => {
    const { onClose, title, description } = popupProps;

    return (
        <Modal
            isVisible
            backdropColor="rgba(0,0,0,0.5)"
            animationIn="fadeIn"
            animationOut="fadeOut">
            <ContentWrapper>
                <Content>
                    <StyledTitle>{title}</StyledTitle>
                    <Text>{description}</Text>
                </Content>
                <TouchableOpacity onPress={onClose}>
                    <CustomIcon size={15} iconName="close" tintColor="red" />
                </TouchableOpacity>
            </ContentWrapper>
        </Modal>
    );
};

export default Popup;
