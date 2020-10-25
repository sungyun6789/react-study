import React from 'react';

const PropsState = () => {
    return (
        <div>
            <h1>Props?</h1>
            <p>
                Props - 컴포넌트 사용시에 특정 값을 전달하기 위해 사용한다. (부모 -> 자식)<br />
                컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정하고 싶다면 컴포넌트에 defaultProps값을 설정해주면 기본값이 설정된다.<br />
            </p>
            <br />
            <h1>State?</h1>
            <p>
                함수형 컴포넌트에서 state는 useState 즉 hooks에서 제공하는 함수를 사용하는데 컴포넌트의 상태 관리를 위해 사용되는 훅이다.<br />
                기본적인 선언 방법은 <b>const a = [number, setNumber] = useState(0);</b> 이런식으로 초기설정을 한다.<br />
                위에서 number는 값을 저장하는 변수고 setNumber는 그 값을 갱신하는 함수이다. useState(0) 이 부분은 처음값을 0으로 설정한다 라는 뜻이다.
            </p>
            <div>
                한줄요약: Props는 읽기전용이니까 값이 고정돼있을 때 사용, State는 쓰기전용이니까 값이 동적일 때 사용
            </div>
        </div>
    )
}

export default PropsState;