import React, { useState } from 'react';

const ReactEvent = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>+1</button>
            <button onClick={() => setNumber(number - 1)}>-1</button>
            <br />
            <h1>{number}</h1>
        </div>
    )
}

export default ReactEvent;