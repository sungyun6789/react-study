import styled from 'styled-components';

const BodyStyle = styled.div`
    background: white;
    height: 463px;
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
        height: 329px;
        line-height: 463px;
        border-radius: 10px 10px 0px 0px;
    }

    .item-container {
        float: left;
        width: 520px;
        height: 347px;
        margin-top: 30px;
        margin-right: 15px;
        
    }

    .imagebox {
        background: white;
        border-radius: 10px;
        box-shadow: 10px red;
        box-shadow: 10px black;
        box-shadow: 2px 2px 2px 2px #efebe9;
        font-weight: 100;
        font-size: 14.5px;
    }

    .body-container {
        margin: 0px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export default BodyStyle;