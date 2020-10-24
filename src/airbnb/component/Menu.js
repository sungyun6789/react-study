import React from 'react';
import MenuStyle from '../styledcomponent/MenuStyle';
import { AiOutlineHome } from 'react-icons/ai';
import { CgUserList } from 'react-icons/cg';

const Menu = () => {
    const homeClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <MenuStyle>
            <div className='head'>
                <a href='#'><AiOutlineHome className='homelogo' onClick={homeClick} /></a>
                <div className='menu'>
                    <span>숙소</span><span>체험</span><a href='https://www.airbnb.co.kr/s/experiences/online' target='_blank' className='menu'>온라인체험</a>
                </div>
                <button><CgUserList className='user' /></button>
            </div>
        </MenuStyle>
    )
}

export default Menu;