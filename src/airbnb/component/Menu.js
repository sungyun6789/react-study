import React from 'react';
import MenuStyle from '../style/MenuStyle';
import { AiOutlineHome } from 'react-icons/ai';
import { CgUserList } from 'react-icons/cg';

const Menu = () => {
    const homeClick = () => {
        window.scrollTo(0, 0);
    }

    const onClick = () => {
        if (true) {

        }
    }

    const nearClick = () => {
        window.open('https://www.airbnb.co.kr/s/homes?location_search=NEARBY&search_type=HOMEPAGE_BANNER');
    }

    return (
        <MenuStyle>
            <div className='head'>
                <div className='logofixed'><a href='#'><AiOutlineHome className='homelogo' onClick={homeClick} /><b>airbnb</b></a></div>
                <div className='menu'>
                    <span>숙소</span><span>체험</span><a href='https://www.airbnb.co.kr/s/experiences/online' className='online'>온라인 체험</a>
                    <a href='https://www.airbnb.co.kr/host/homes'><span className='host'>호스트 되기</span></a>
                    <div><button className='hostButton'></button></div>
                    <button className='userButton'><CgUserList className='user' onClick={onClick} /></button>
                </div>
            </div>

            <p className='firsttext'>
                이제, 여행은<br />가까운 곳에서.
            </p>
            <p className='secondtext'>
                새로운 곳에서 머물러보세요. 직접 살아보거나, 업무를<br />
                보거나,휴식할 수 있는 가까운 숙소를 찾아보세요.
            </p>
            <button className='nearButton' onClick={nearClick}>가까운 여행지 둘러보기</button>
        </MenuStyle>
    )
}

export default Menu;