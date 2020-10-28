import React from 'react';
import BodyStyle from '../style/BodyStyle';
import bodyimage1 from '../img/bodyimage1.jpg';
import bodyimage2 from '../img/bodyimage2.jpg';
import bodyimage3 from '../img/bodyimage3.jpg';

const AirbnbBody = ({ children }) => {
    return (
        <BodyStyle>
            {children}
            <div className='body-container'>
                <div className='item-container'>
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

                <div className='item-container'>
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

                <div className='item-container'>
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