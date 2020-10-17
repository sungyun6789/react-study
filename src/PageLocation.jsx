import React from 'react';
import { useLocation } from 'react-router-dom';

const PageLocation = () => {
    const location = useLocation();

    console.log(location);

    return (
        <div>
            {location}
        </div>
    )
}

export default PageLocation;