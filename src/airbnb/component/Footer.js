import React from 'react';
import FooterStyle from '../style/FooterStyle';
import globe from '../img/globe.png';
import won from '../img/won.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import naverblog from '../img/naverblog.png';
import naverpost from '../img/naverpost.png';

const Footer = () => {
    return (
        <FooterStyle>
            <div>
                <footer>
                    <div>
                        <section className='firstSection'>
                            <h4>소개</h4>
                            <ul>
                                <li>
                                    <a>에어비앤비 이용 방법</a>
                                </li>
                                <li>
                                    <a>뉴스룸</a>
                                </li>
                                <li>
                                    <a>에어비앤비 플러스</a>
                                </li>
                                <li>
                                    <a>에어비앤비 Luxe</a>
                                </li>
                                <li>
                                    <a>호텔투나잇</a>
                                </li>
                                <li>
                                    <a>에어비앤비 비즈니스 프로그램</a>
                                </li>
                                <li>
                                    <a>올림픽</a>
                                </li>
                                <li>
                                    <a>채용정보</a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h4>커뮤니티</h4>
                            <ul>
                                <li>
                                    <a>다양성 및 소속감</a>
                                </li>

                                <li>
                                    <a>접근성</a>
                                </li>

                                <li>
                                    <a>에어비앤비 어소시에이트</a>
                                </li>

                                <li>
                                    <a>구호 인력을 위한 숙소</a>
                                </li>

                                <li>
                                    <a>친구 초대하기</a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h4>호스팅하기</h4>
                            <ul>
                                <li>
                                    <a>숙소 호스팅</a>
                                </li>

                                <li>
                                    <a>온라인 체험 호스팅하기</a>
                                </li>

                                <li>
                                    <a>체험 호스팅하기</a>
                                </li>

                                <li>
                                    <a>책임감 있는 호스팅</a>
                                </li>

                                <li>
                                    <a>Open Homes</a>
                                </li>

                                <li>
                                    <a>자료 센터</a>
                                </li>

                                <li>
                                    <a>커뮤니티 센터</a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h4>에어비앤비 지원</h4>
                            <ul>
                                <li>
                                    <a>에어비앤비의 코로나19 대응 방안</a>
                                </li>
                                <li>
                                    <a>도움말 센터</a>
                                </li>

                                <li>
                                    <a>예약 취소 옵션</a>
                                </li>

                                <li>
                                    <a>에어비앤비 이웃 민원 지원</a>
                                </li>

                                <li>
                                    <a>신뢰와 안전</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </footer>
            </div>
            <div className='copyright'>
                <hr />
                <p>&copy; 2020 Airbnb,Inc. All rights reserved<span>.</span>
                    <span>개인정보 처리방침</span><span>.</span>
                    <span>이용약관</span><span>.</span>
                    <span>사이트맵</span><span>.</span>
                    <span>한국의 변경된 환불정책</span>

                    <img src={globe} className='korea'></img><span className='koreaSpan'>한국어(KR)</span>
                    <img src={won} className='won'></img><span className='wonSpan'>KRW</span>
                    <span className='rightFooter'>
                        <img src={facebook}></img>
                        <img src={twitter}></img>
                        <img src={instagram}></img>
                        <img src={naverblog}></img>
                        <img src={naverpost}></img>
                    </span>
                </p>
            </div>
        </FooterStyle>
    )
}

export default Footer;
