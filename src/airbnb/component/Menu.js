import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CgUserList } from 'react-icons/cg';
import styled from 'styled-components';
import moon4 from '../img/moon4.jpg';
import globe from '../img/globe.png';

const MainBackGround = styled.div`
    background-image:url(${moon4});
    background-size: cover;
    width: 1905px;
    height: 805px;      /* 758 */

    button {
        cursor: pointer;
    }

    b {
        font-size: 24px;
        position: fixed;
        margin-top: 1.6%;
        margin-left: 10px;
        color: white;
    }

    span {
        cursor: pointer;
        margin-right: 28px;
    }

    a {
        text-decoration: none;
        color: white;
    }
`;

const LogoFixed = styled.div`
    position: fixed;
`;

const Homelogo = styled(AiOutlineHome)`
    width: 40px;
    height: 40px;
    margin-left: 140px;
    margin-top: 18px;
    color: white;
    text-decoration: none;
`;

const Menu = styled.div`
    color: white;
    font-weight: 300;
    padding-top: 30px;
    display: flex;
    justify-content: center;
`;

const Rooms = styled.span`
    display: flex;
    justify-content: center;
`;

const Online = styled.a`
    text-decoration: none;
    color: white;
    margin-left: 8px;
`;

const Host = styled.span`
    display: flex;
    margin-left: 24%;
    font-size: 15px;
    position: absolute;

        :hover {
        border-radius: 1rem;
        background: #C1C1C1;
        padding: 5px;
    }
`;

const HostButton = styled.button`
    display: flex;
    width: 25px;
    height: 25px;
    background-image: url(${ globe});
    border-radius: 1rem;
    background-size: cover;
    position: absolute;
    top: 85px;
    left: 1621px;
`;

const UserButton = styled.button`
    display: flex;
    margin-left: 1000px;
    margin-right: 70px;
    width: 79px;
    height: 44px;
    position: absolute;
    top: 75px;
    right: 80px;
    padding: 3px;
    border-radius: 2rem;
    color: #616161;
`;

const User = styled(CgUserList)`
    width: 100%;
    height: 100%;
`;

const FirstText = styled.p`
    font-weight: 500;
    font-size: 40px;
    margin-top: 300px;
    margin-left: 150px;
    color: pink;
`;

const SecondText = styled.p`
    margin-top: -30px;
    margin-left: 150px;
    color: pink;
    font-size: 14px;
`;

const NearButton = styled.button`
    display: flex;
    width: 160px;
    margin-left: 150px;
    font-weight: 500;
    padding-left: 13px;
    padding-right: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 0.5rem;
    font-size: 14px;
    border: none;

    :hover {
        background: #bdbdbd;
    }
`;

const MenuBlockStyle = () => {

    const homeClick = () => {
        window.scrollTo(0, 0);
    }

    const nearClick = () => {
        window.open('https://www.airbnb.co.kr/s/homes?location_search=NEARBY&search_type=HOMEPAGE_BANNER');
    }

    return (
        <MainBackGround>
            <LogoFixed>
                <Homelogo onClick={homeClick}>
                    <AiOutlineHome />
                </Homelogo>
                <b>airbnb</b>
            </LogoFixed>
            <Menu>
                <Rooms>
                    <span>숙소</span><span>체험</span>
                    <Online><a href='https://www.airbnb.co.kr/s/experiences/online'>온라인 체험</a></Online>
                </Rooms>
                <div><Host><a href='https://www.airbnb.co.kr/host/homes'>호스트 되기</a></Host></div>
                <HostButton />

                <UserButton>
                    <User>
                        <CgUserList></CgUserList>
                    </User>
                </UserButton>

            </Menu>
            <FirstText>
                이제 여행은<br />가까운 곳에서.
            </FirstText>

            <SecondText>
                새로운 곳에서 머물러보세요. 직접 살아보거나, 업무를<br />
                보거나, 휴식을 할 수 있는 가까운 숙소를 찾아보세요.
            </SecondText>
            <NearButton onClick={nearClick}>가까운 여행지 둘러보기</NearButton>
        </MainBackGround >
    );
};

export default MenuBlockStyle;