import styled from 'styled-components';
import React from 'react';
import bodyimage1 from '../img/bodyimage1.jpg';
import bodyimage2 from '../img/bodyimage2.jpg';
import bodyimage3 from '../img/bodyimage3.jpg';

const BodyStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    background: white;
    height: 450px;

    p {
        margin-top: 7px;
        margin-left: 10px;
        padding-bottom: 15px;
    }

    b {
        font-size: 18px;
        font-weight: 500;
    }

    img {
        width: 520px;
        height: 347px;
        line-height: 463px;
        border-radius: 15px 15px 0px 0px;
    }
`;

const BodyContainer = styled.div`
        margin-top: 50px;
`;

const ItemContainer = styled.div`
        margin-right: 15px;
        text-align: center;
        float: left;
        width: 520px;
        height: 347px;
        cursor: pointer;
`;

const ImageBox = styled.div`
        background: white;
        border-radius: 15px;
        box-shadow: 10px red;
        box-shadow: 10px black;
        box-shadow: 2px 2px 2px 2px #efebe9;
        font-weight: 100;
        font-size: 14.5px;
`;

const BodyBlock = () => {

    const imageUrl1 = () => {
        window.open('https://www.airbnb.co.kr/s/all?refinement_paths%5B%5D=%2Fplaylists%2F42221&last_search_session_id=24965400-5987-4194-b723-e35aa5efd5f4&search_type=section_navigation');
    }

    const imageUrl2 = () => {
        window.open('https://www.airbnb.co.kr/s/experiences/online');
    }

    const imageUrl3 = () => {
        window.open('https://www.airbnb.co.kr/s/homes?refinement_paths[]=homes/section/NEARBY_LISTINGS&room_types[]=Entire%20home%2Fapt&title_type=NEARBY_LISTINGS');
    }

    return (
        <BodyStyle>
            <BodyContainer>
                <ItemContainer onClick={imageUrl1}>
                    <ImageBox>
                        <img src={bodyimage1} />
                        <div>
                            <p>
                                <b>독특한 공간</b><br />
                                단순한 숙소 이상의 특별함이 담긴 공간
                            </p>
                        </div>
                    </ImageBox>
                </ItemContainer>

                <ItemContainer onClick={imageUrl2}>
                    <ImageBox>
                        <img src={bodyimage2} />
                        <div>
                            <p>
                                <b>온라인 체험</b><br />
                                모두가 함께 즐기는 세계 각지의 독특한 체험
                            </p>
                        </div>
                    </ImageBox>
                </ItemContainer>

                <ItemContainer onClick={imageUrl3}>
                    <ImageBox>
                        <img src={bodyimage3} />
                        <div>
                            <p>
                                <b>집 전체</b><br />
                                일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.
                            </p>
                        </div>
                    </ImageBox>
                </ItemContainer>
            </BodyContainer>
        </BodyStyle>
    )
}

export default BodyBlock;