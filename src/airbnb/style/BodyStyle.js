import styled from 'styled-components';

const BodyStyle = styled.div`
    background: white;
    height: 450px;
    margin-left: 70px;

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

    .item-container {
        margin-right: 15px;
        text-align: center;
        float: left;
        width: 520px;
        height: 347px;
        cursor: pointer;
    }

    .imagebox {
        background: white;
        border-radius: 15px;
        box-shadow: 10px red;
        box-shadow: 10px black;
        box-shadow: 2px 2px 2px 2px #efebe9;
        font-weight: 100;
        font-size: 14.5px;
    }

    .body-container {
        margin-top: 50px;
        margin-left: 100px;
    }
`;

export default BodyStyle;