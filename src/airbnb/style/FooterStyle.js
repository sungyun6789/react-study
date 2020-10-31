import styled from 'styled-components';

const FooterStyle = styled.div`
    height: 470px;

    img {
        width: 15px;
        height: 15px;
    }
    
    section {
        justify-content: space-around;
        align-items: flex-start;
        margin-top: 30px;
        font-size: 14px;
        width: 406px;
        height: 305px;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 15px;
    }

    h4 {
        margin-left: 40px;
    }
    
    hr {
        width: 1600px;
        border: 1px solid #f5f5f5;
        margin-top: 65px;
    }

    p {
        margin-left: 150px;
        font-size: 14px;
        margin-top: 20px;
    }

    span {
        margin-left: 10px;
    }

    .firstSection {
        margin-left: 120px;
    }

    .korea {
        margin-left: 550px;
    }

    .koreaSpan {
        text-decoration: underline;
    }

    .won {
        margin-left: 15px;
    }

    .wonSpan {
        text-decoration: underline;
    }

    .rightFooter {
        margin-left: 40px;

        img {
            margin-left: 22px;
            width: 18px;
            height: 18px;
        }
    }

    .footerDiv {
        display: flex;
    }

    
`;

export default FooterStyle;