import styled from 'styled-components';
import moon4 from '../img/moon4.jpg';
import moonimg from '../img/moonimg.jpg';

const MenuStyle = styled.div`
    background-image:url(${moon4});
    background-size: cover;
    width: 1905px;
    height: 758px;

    b {
        font-size: 24px;
        position: fixed;
        margin-top: 1.6%;
        margin-left: 10px;
    }

    span {
        margin-right: 28px;
        :hover {
            text-decoration: underline;
        }
    }

    a {
        text-decoration: none;
        color: white;
    }

    .online {
        text-decoration: none;
        color: white;
        margin-left: 3px;
    }

    .homelogo {
        width: 40px;
        height: 40px;
        margin-left: 140px;
        margin-top: 18px;
        color: white;
        text-decoration: none;
    }

    .menu {
        text-align: center;
        color: white;

        margin-right: 1px;
        margin-top: -1.7%;
        font-weight: 300;
    }

    .user {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .head {
        margin-left: 0%;
        margin-right: 0%;
        font-size: 16px;
    }

    .firsttext {
        font-weight: 500;
        font-size: 40px;
        margin-top: 280px;
        margin-left: 150px;
        color: pink;
    }
    .secondtext {
        margin-top: -30px;
        margin-left: 150px;
        color: pink;
        font-size: 14px;
    }

    .userButton {
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
    }

    .nearButton {
        width: 160px;
        margin-left: 150px;
        font-weight: 500;
        padding-left: 13px;
        padding-right: 13px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 0.5rem;
        border: none;
        font-size: 14px;
    }

    .host {
        position: absolute;
        left: 1532px;
        font-size: 15px;
    }

    .hostButton {
        width: 26px;
        height: 26px;
        background-image:url(${moonimg});
        background-size: cover;
        position: absolute;
        top: 85px;
        left: 1621px;
    }

`;

export default MenuStyle;