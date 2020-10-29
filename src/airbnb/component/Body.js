import React from 'react';
import BodyStyle from '../style/BodyStyle';
import bodyimage1 from '../img/bodyimage1.jpg';
import bodyimage2 from '../img/bodyimage2.jpg';
import bodyimage3 from '../img/bodyimage3.jpg';

const AirbnbBody = () => {

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
            <div className='body-container'>
                <div className='item-container' onClick={imageUrl1}>
                    <div className='imagebox'>
                        <img src={bodyimage1} />
                        <div>
                            <p>
                                <b>독특한 공간</b><br />
                                단순한 숙소 이상의 특별함이 담긴 공간
                            </p>
                        </div>
                    </div>
                </div>

                <div className='item-container' onClick={imageUrl2}>
                    <div className='imagebox'>
                        <img src={bodyimage2} />
                        <div>
                            <p>
                                <b>온라인 체험</b><br />
                                모두가 함께 즐기는 세계 각지의 독특한 체험
                            </p>
                        </div>
                    </div>
                </div>

                <div className='item-container' onClick={imageUrl3}>
                    <div className='imagebox'>
                        <img src={bodyimage3} />
                        <div>
                            <p>
                                <b>집 전체</b><br />
                                일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </BodyStyle>
    );
}

export default AirbnbBody;