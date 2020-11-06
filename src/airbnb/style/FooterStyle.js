import styled from 'styled-components';


export const FooterStyle = styled.div`
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
`;

export const FirstSection = styled.section`
    margin-left: 120px;
`;

export const Korea = styled.img`
    margin-left: 550px;
`;

export const KoreaSpan = styled.span`
    text-decoration: underline;
`;

export const Won = styled.img`
    margin-left: 15px;
`;

export const WonSpan = styled.span`
    text-decoration: underline;
`;

export const RightFooter = styled.span`
    margin-left: 40px;

    img {
        margin-left: 22px;
        width: 18px;
        height: 18px;
    }
`;

export const FooterDiv = styled.div`
    display: flex;
`;

