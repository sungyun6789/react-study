import React, { useState, useEffect } from 'react';

const Sub = () => {
    const [number, setNumber] = useState(0);
    const onSubmit = useEffect((e) => setNumber(number + 1), []);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <p>{number}</p>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}

export default Sub;