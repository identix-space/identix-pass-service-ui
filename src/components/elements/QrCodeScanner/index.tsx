import React, {useState} from 'react';
import {Html5Qrcode} from 'html5-qrcode/cjs/html5-qrcode';
import {Button} from '../Buttons';
import styled from 'styled-components';

let html5QrCode: any = null;

interface PropTypes {
    onSuccess: (result: string) => void,
    title?: string
}

export const QrCodeScanner = ({onSuccess, title = 'Scan QR code'}: PropTypes) => {
    const [error, setError] = useState('');
    const [enabled, setEnabled] = useState(false);

    const getCameraStream = async () => {
        try {
            const devices = await Html5Qrcode.getCameras();

            if (devices && devices.length) {
                startRecord(devices[0].id);
            }
            if (error) {
                setError('');
            }
        } catch (e: any) {
            console.error(e);
            const notAllowedError = e?.name === 'NotAllowedError';
            setError(
                notAllowedError
                    ? 'Access to camera is denied.\nPlease provide access to the camera in your browser settings.'
                    : 'Can\'t get access to the camera'
            );
        }
    };

    const startRecord = async (cameraId: string) => {
        try {
            html5QrCode = new Html5Qrcode('qr-code-reader');
            setEnabled(true);
            html5QrCode.start(
                cameraId,
                {
                    fps: 10,
                    qrbox: {width: 250, height: 250},
                    videoConstraints: {facingMode: 'environment'}
                },
                (decodedText: any) => {
                    onSuccess(decodedText);
                    stopRecord();
                },
                null
            ).catch((err: any) => {
                console.log('error', err);
                setEnabled(false);
            });

        } catch (e) {
            console.error(e);
        }
    };

    const stopRecord = () => {
        setEnabled(false);
        if (html5QrCode) {
            html5QrCode.stop();
        }
    };

    return (
        <div>
            <Row>
                <Button onClick={getCameraStream}>
                    {title}
                </Button>
                <Button onClick={stopRecord} disabled={!enabled}>
                    Stop scanning
                </Button>
            </Row>
            <RecorderWrapper>
                <div id="qr-code-reader" />
            </RecorderWrapper>
            {error && <div>{error}</div>}
        </div>
    );
};

const RecorderWrapper = styled.div`
    margin: 16px 0;
    max-width: 100%;
`;
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
