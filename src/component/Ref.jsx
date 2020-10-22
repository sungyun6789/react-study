import React, { useState, useRef } from 'react';

const Ref = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs;    // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; // e.target 을 통해서 name과 value를 추출
        setInputs({
            ...inputs,   // 기존의 input 객체를 복사한 뒤
            [name]: value   // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();      // nameInput에 접근하기 위해 current를 사용
    };

    return (
        <>
            <h1>Ref란 무엇일까요?</h1>
            <p>Ref란 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공하는 것이다. (함수형 컴포넌트에서는 render는 없는 개념이다)</p>

            <h3>언제 사용해야할까요?</h3>
            <p>포커스, 텍스트 선택영역, 미디어의 재생을 관리할 때, 애니메이션을 직접적으로 실행시킬 때, 서트파티 DOM 라이브러리를 React와 같이 사용할 때</p>

            <div>
                <input
                    name='name'
                    placeholder='이름'
                    onChange={onChange}
                    value={name}
                    ref={nameInput}     // 컴포넌트에 ref를 적용하면 컴포넌트 내부의 메서드 및 멤버변수에도 접근할 수 있다.
                />

                <input
                    name='nickname'
                    placeholder='닉네임'
                    onChange={onChange}
                    value={nickname}
                />

                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값: </b>
                    {name} ({nickname})
                </div>
            </div>
        </>
    )
}

export default Ref;