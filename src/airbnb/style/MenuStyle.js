import styled from 'styled-components';
import moon4 from '../img/moon4.jpg';
import globe from '../img/globe.png';

const MenuStyle = styled.div`
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
    }

    span {
        cursor: pointer;
        margin-right: 28px;

    }

    a {
        text-decoration: none;
        color: white;
    }

    .online {
        text-decoration: none;
        color: white;
        margin-left: 8px;
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
        color: white;
        margin-right: 1px;
        font-weight: 300;
        padding-top: 30px;
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
        margin-top: 300px;
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
    }

    .host {
        margin-left: 480px;
        font-size: 15px;

        :hover {
            border-radius: 1rem;
            background: #C1C1C1;
            padding: 5px;
        }
    }

    .hostButton {
        width: 26px;
        height: 26px;
        background-image:url(${globe});
        border-radius: 1rem;
        background-size: cover;
        position: absolute;
        top: 85px;
        left: 1621px;
    }

    .logofixed {
        position: fixed;
    }

    .start {
        margin-left: 855px;
        margin-right: 30px;
    }

`;

export default MenuStyle;