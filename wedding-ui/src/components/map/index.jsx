import React, { useState } from 'react';
import { TMap, InfoWindow } from '@map-component/react-tmap';

export default function Map() {
    const [visible, setVisible] = useState(true);

    const onClose = () => {
        setVisible(false);
    };

    return (
        <TMap
            center={{ lat: '39.984104', lng: '116.307503' }}
            mapKey="TOZBZ-OU2CX-JJP4Z-7FCBV-CDDJ2-AHFQZ"
        >
            <InfoWindow
                visible={visible}
                position={{ lat: '39.984104', lng: '116.307503' }}
                content="Hello World!"
                onClose={onClose}
            />
        </TMap>
    );
};

const _secret = "EENBZ-ZLGKT-3O2XZ-LZP7G-MLBCE-NFFNQ";

const paths = [
    { lat: 40.041054, lng: 116.272305 },
    { lat: 40.039419, lng: 116.272721 },
    { lat: 40.039764, lng: 116.274824 },
    { lat: 40.041374, lng: 116.274491 },
];

const getOverlays = () =>
    paths.map((item, i) => ({
        position: item,
        id: i,
        data: i,
    }));