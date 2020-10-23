import React, { useState } from 'react';

const Counter = () => {
    const [firstValue, setFirstValue] = useState();
    const [secondValue, setSecondValue] = useState();

    const calculate = (e) => {
        const {
            target: { name },
        } = e;

        if (name === 'plus') {
            alert(firstValue + secondValue);
        }
        if (name === 'minus') {
            alert(firstValue - secondValue);
        }
    }

    const onChange = (e) => {
        const {
            target: { value, name },
        } = e;

        if (name === 'firstText') {
            setFirstValue(Number(value))
        } else if (name === 'secondText') {
            setSecondValue(Number(value))
        }
    }

    return (
        <div>
            <input
                type='text'
                value={firstValue}
                name={'firstText'}
                onChange={onChange}
                placeholder="값을 입력해주세요"
            />
            <input
                type='text'
                value={secondValue}
                name={'secondText'}
                onChange={onChange}
                placeholder="값을 입력해주세요"
            />

            <button name='plus' onClick={calculate}>+</button>
            <button name='minus' onClick={calculate}>-</button>
            <div>
                <br />
                <h1>상태 관리란?</h1>
                <p>
                    상태란 영어로 state다. 상태관리란 여러 컴포넌트 간의 데이터 전달과 이벤트 통신을 한 곳에서 관리하는 패턴을 의미한다.<br />
                    리액트에서는 Redux, Mbox 와 같이 상태 관련 라이브러리를 사용하고있다.
                </p>
            </div>
        </div>
    );
};

export default Counter;