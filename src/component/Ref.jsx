import React from 'react';

const Ref = () => {
    return (
        <>
            <h1>Ref란 무엇일까요?</h1>
            <p>Ref란 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공하는 것이다. (함수형 컴포넌트에서는 render는 없는 개념이다)</p>

            <h3>언제 사용해야할까요?</h3>
            <p>포커스, 텍스트 선택영역, 미디어의 재생을 관리할 때, 애니메이션을 직접적으로 실행시킬 때, 서트파티 DOM 라이브러리를 React와 같이 사용할 때</p>
        </>
    )
}

export default Ref;