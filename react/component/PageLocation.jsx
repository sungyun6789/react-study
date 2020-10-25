import React from 'react';
import { useLocation } from 'react-router-dom';

const PageLocation = () => {
    const location = useLocation();
    return (
        <div>
            현재 주소: {location.pathname}
        </div>
    )
}

export default PageLocation;