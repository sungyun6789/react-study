import React from 'react';

const Jsx = () => {
    return (
        <div>
            <h1>JSX란?</h1>
            <p>
                JavaScript를 확장한 문밥이다.
                HTML과 비슷하게 사용되며 JS에서 HTML문법을 사용하고 싶을 때 사용한다.<br />
                만약 JSX를 사용하지 않으면 ReactDOM.CreateElement() 이 메소드를 도배해야 할 것이다.
            </p>
            <br />
            <h2>규칙</h2>
            <p>
                태그는 꼭 닫혀있어야 한다. 만약 태그를 열어둔 상태면 에러가 날 것이다.<br />
                최상위 태그는 꼭 1개이어야 한다.<br />
                JSX안에서 JS값을 사용하려면 중괄호를 사용한다.<br />
                카멜케이스를 이용한다. ex) className, onClick, onChange
            </p>
        </div>
    )
}

export default Jsx;