import styled from 'styled-components';
import house from '../img/house.jpeg';

const MenuStyle = styled.div`
    background-image:url(${house});
    background-size: cover;
    width: 1950px;
    height: 758px;

    span {
        margin-right: 20px;
    }

    button {
        margin-left: 40px;
        width: 79px;
        height: 44px;
        position: absolute;
        top: 75px;
        right: 80px;
        padding: 3px;
        border-radius: 2rem;
        color: #4a148c;
    }

    a {
        text-decoration: none;
    }

    .homelogo {
        width: 45px;
        height: 45px;
        margin-left: 40px;
        margin-top: 25px;
        color: black;
    }

    .menu {
        text-align: center;
        display: inline;
        color: white;
    }

    .user {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .head {
        margin-left: 0%;
        margin-right: 0%;
        font-size: 18px;
    }

`;

export default MenuStyle;