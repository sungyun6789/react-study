import React from 'react';
import SecondBodyStyle from '../style/SecondBodyStyle';

const SecondBody = () => {
    const onClick = () => {
        window.open('https://www.airbnb.co.kr/s/experiences/online');
    }

    return (
        <SecondBodyStyle>
            <div className='firstText'>
                <b>온라인 체험</b><br />
                세계 각지의 사람들을 만나 새로운 경험을 해보세요. 개성 있는 호스트가<br />
                진행하는 실시간 영상 세션을 통해 이제 집에서도 안전하게 체험을 즐기실<br />
                수 있습니다.
            </div>
            <div>
                <button onClick={onClick}>모두 둘러보기</button>
            </div>

            <div className='item-container1'>
                <div className='image1' />
                <div className='text1'>상하이 샤오롱바오 만드는 법 배우기</div>
            </div>

            <div className='item-container2'>
                <div className='image2'></div>
                <div className='text2'>그라피티와 거리 예술에 반영된 여성상 탐구</div>
            </div>

            <div className='item-container3'>
                <div className='image3' />
                <div className='text3'>뉴욕 마술사와 백스테이지 구경하기</div>
            </div>

            <div className='item-container4'>
                <div className='image4' />
                <div className='text4'>수제 칵테일을 마시며 젠더에 관해 토론하기</div>
            </div>
        </SecondBodyStyle>
    );
}

export default SecondBody;