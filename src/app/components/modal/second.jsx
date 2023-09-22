"use client"

import {useState} from 'react';
import HowToReachUs from '../form/how-to-reach-us/how-to-reach-us.jsx';
import Thanks from '../home/thanks-for-contacting-us/thanks-for-contacting-us.jsx';
import Form from '../form/form.jsx';
import MainMobilePopup from '../popup/main-mobile/main-mobile.jsx';

const SecondModal = (props) => {
    const [showFirstModal, setShowFirstModal] = useState(true);
    const [showSecondModal, setShowSecondModal] = useState(false);

    const handleFirstModalButtonClick = () => {
        setShowFirstModal(false);
        setShowSecondModal(true);
    };

    let firstModalContent;

    if (showFirstModal) {
        if (props.HowToReachUs) {
            firstModalContent = (
                <HowToReachUs properties={props.properties} onButtonClickShow={handleFirstModalButtonClick}/>
            );
        } else if (props.isMainMobile) {
            firstModalContent = (
                <MainMobilePopup onButtonClickShow={handleFirstModalButtonClick}/>
            );
        } else {
            firstModalContent = (
                <Form onButtonClickShow={handleFirstModalButtonClick} isOnMain={props.isOnMain}/>
            );
        }
    }

    return (
        <>
            {firstModalContent}
            {showSecondModal && (
                <Thanks
                    bg={props.HowToReachUs || props.isMainMobile ? '#110F0F' : undefined}
                    width={props.HowToReachUs || props.isMainMobile ? undefined : '95%'}
                    height={props.HowToReachUs || props.isMainMobile ? undefined : '260px'}
                />
            )}
        </>
    );
};

export default SecondModal;

