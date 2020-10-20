import React from 'react';

const ArrayData = () => {
    const information = [
        {
            id: 0,
            name: '박성윤',
            phone: '010-0000-0000'
        },
        {
            id: 1,
            name: '이땡땡',
            phone: '010-0000-0001'
        },
        {
            id: 2,
            name: '김땡땡',
            phone: '010-0000-0002'
        }
    ]

    return (
        <div>
            {JSON.stringify(information)}

            <h1>배열 데이터 랜더링 및 관리</h1>
            <p>
                배열의 정의 - 배열은 같은 타입의 변수들로 이루어진 유한 집합으로 정의된다.<br />
                배열을 구성하는 각각의 값을 배열요소(element) 라고 하며, 배열에서의 위치를 가리키는 숫자는 index라고 한다.<br />
            </p>
            <br />
            <p>
                배열에서 데이터를 추가하고 빼고 수정하는데 일반 JS랑 방식이 조금 다릅니다.<br />
                리액트에서는 <b>불변성을 유지해야 하기 때문에</b> 기존배열을 건드려서는 안되고 기존의 배열에 기반해서 새 배열을 만들어 내는 함수를 사용해야 하는데 그 함수가
                concat, slice, map, filter 가 있다.<br />
                리액트에서 불변성 유지가 중요한 이유는 불변성을 유지해야 리액트에서 모든것을 필요한 상황에 리렌더링 되도록 설계할 수 있고 그렇게 해야 <b>성능도 최적화 될 수 있기 때문이다.</b>
            </p>
            <h2>아래는 내가 배열함수 관련해서 많이 참고했던 사이트 들이다.</h2>
            <p>일단 기본적으로 MDN 사이트가 제일 좋다. 하지만 그건 누구나 아는 사실이니까 제외하고 얘기하겠다.</p>
            <a href="https://velog.io/@daybreak/Javascript-map%ED%95%A8%EC%88%98" target="blank">MAP</a><br />
            <a href="https://www.codegrepper.com/code-examples/javascript/react+filter+array" target="blank">filter</a><br />
        </div>
    );
};

export default ArrayData;