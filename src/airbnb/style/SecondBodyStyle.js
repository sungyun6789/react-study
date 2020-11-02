import React from 'react';
import styled from 'styled-components';
import s_image1 from '../img/s_image1.jpg';
import s_image2 from '../img/s_image2.jpg';
import s_image3 from '../img/s_image3.jpg';
import s_image4 from '../img/s_image4.jpg';

const SecondBodyStyle = styled.div`
    display: flex;
    background: black;
    color: white;
    height: 1100px;

    b {
        font-size: 30px;
    }

    button {
        cursor: pointer;
        position: absolute;
        top: 1440px;
        left: 1650px;
        padding: 3px;
        width: 107px;
        height: 34px;
        background: black;
        color: white;
        border: 1px solid white;
        border-radius: 0.5rem;
        :hover {
            background: #bdbdbd;
        }
    }
`;

const FirstText = styled.div`
        padding-top: 70px;
        margin-left: 160px;
        font-size: 16px;
        font-weight: 100;
`;

const Image1 = styled.div`
        background-image:url(${s_image1});
        background-size: cover;
        width: 784px;
        height: 750px;
        
        border-radius: 1rem 1rem 0 0;
`;

const Image2 = styled.div`
        background-image:url(${s_image2});
        background-size: cover;
        width: 392px;
        height: 330px;
        position: absolute;
        border-radius: 1rem 1rem 0 0;
`;

const Image3 = styled.div`
        background-image:url(${s_image3});
        background-size: cover;
        width: 392px;
        height: 330px;
        position: absolute;
        border-radius: 1rem 1rem 0 0;
`;

const Image4 = styled.div`
        background-image:url(${s_image4});
        background-size: cover;
        width: 800px;
        height: 335px;
        border-radius: 1rem 1rem 0 0;
`;

const ItemContainer1 = styled.div`
        display: flex;
        cursor: pointer;
        position: absolute;
        margin-top: 200px;
        margin-left: 160px;
        border-radius: 1rem;
        width: 784px;
        height: 820px;
        background: #212121;
`;
const ItemContainer2 = styled.div`
        display: flex;
        cursor: pointer;
        border-radius: 1rem;
        width: 392px;
        height: 400px;
        position: absolute;
        left: 980px;
        top: 1580px;
        margin-bottom: 100px;
        margin-left: -20px;
        background: #212121;
`;

const ItemContainer3 = styled.div`
        display: flex;
        cursor: pointer;
        border-radius: 1rem;
        width: 392px;
        height: 400px;
        position: absolute;
        left: 1390px;
        top: 1580px;
        background: #212121;
        margin-left: -20px;
`;

const ItemContainer4 = styled.div`
        display: flex;
        cursor: pointer;
        border-radius: 1rem;
        width: 800px;
        height: 405px;
        position: absolute;
        left: 960px;
        top: 1987px;
        background: #212121;
        margin-top: 10px;
`;

const Text1 = styled.div`
        margin-top: 770px;
        margin-left: 20px;
        position: absolute;
`;

const Text2 = styled.div`
        margin-top: 350px;
        margin-left: 15px;
`;

const Text3 = styled.div`
        margin-top: 350px;
        margin-left: 15px;
`;

const Text4 = styled.div`
        margin-top: 350px;
        margin-left: 15px;
        position: absolute;
`;

const SecondBodyBlock = () => {
    const onClick = () => window.open('https://www.airbnb.co.kr/s/experiences/online');
    const chinaUrl = () => window.open('https://www.airbnb.co.kr/experiences/1715106');
    const artUrl = () => window.open('https://www.airbnb.co.kr/experiences/1755988');
    const magicUrl = () => window.open('https://www.airbnb.co.kr/experiences/1661222');
    const genderUrl = () => window.open('https://www.airbnb.co.kr/experiences/1785860');

    return (
        <SecondBodyStyle>
            <FirstText>
                <b>온라인 체험</b><br />
                세계 각지의 사람들을 만나 새로운 경험을 해보세요. 개성 있는 호스트가<br />
                진행하는 실시간 영상 세션을 통해 이제 집에서도 안전하게 체험을 즐기실<br />
                수 있습니다.
            </FirstText>
            <div>
                <button onClick={onClick}>모두 둘러보기</button>
            </div>

            <ItemContainer1 onClick={chinaUrl}>
                <Image1 />
                <Text1>상하이 샤오롱바오 만드는 법 배우기</Text1>
            </ItemContainer1>

            <ItemContainer2 onClick={artUrl}>
                <Image2 />
                <Text2>그라피티와 거리 예술에 반영된 여성상 탐구</Text2>
            </ItemContainer2>

            <ItemContainer3 onClick={magicUrl}>
                <Image3 />
                <Text3>뉴욕 마술사와 백스테이지 구경하기</Text3>
            </ItemContainer3>

            <ItemContainer4 onClick={genderUrl}>
                <Image4 />
                <Text4>수제 칵테일을 마시며 젠더에 관해 토론하기</Text4>
            </ItemContainer4>
        </SecondBodyStyle>
    )
}

export default SecondBodyBlock;