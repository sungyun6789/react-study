import styled from 'styled-components';

const FooterStyle = styled.div`
    height: 470px;

    img {
        width: 15px;
        height: 15px;
    }
    
    section {
        margin-top: 30px;
        font-size: 14px;
        width: 406px;
        height: 305px;
        float: left;
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
        width: 1580px;
        border: 1px solid #f5f5f5;
    }

    p {
        font-size: 14px;
        margin-left: 160px;
        margin-top: 20px;
    }

    span {
        margin-left: 10px;
    }

    .firstSection {
        margin-left: 120px;
    }

    .copyright {
        padding-top: 400px;
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

    
`;

export default FooterStyle;