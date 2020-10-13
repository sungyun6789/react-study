import React, { useState } from "react"

const Count = () => {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    const calculate = (event) => {
        const {
            target: { name },
        } = event

        if (name === "plus") {
            alert(firstValue + secondValue)
        }
        if (name === "minus") {
            alert(firstValue - secondValue)
        }
    }

    const onChange = (e) => {
        const {
            target: { value, name },
        } = e;

        if (name === "firstText") {
            setFirstValue(Number(value))
        } else if (name === "secondText") {
            setSecondValue(Number(value))
        }
    }

    return (
        <div>
            <input
                type="text"
                value={firstValue}
                name={"firstText"}
                onChange={onChange}
            />
            <input
                type="text"
                value={secondValue}
                name={"secondText"}
                onChange={onChange}
            />
            <button name="plus" onClick={calculate}>+</button>
            <button name="minus" onClick={calculate}>-</button>
        </div >
    );
};

export default Count