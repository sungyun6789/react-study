import styled from 'styled-components';
import s_image1 from '../img/s_image1.jpg';
import s_image2 from '../img/s_image2.jpg';
import s_image3 from '../img/s_image3.jpg';
import s_image4 from '../img/s_image4.jpg';

const SecondBodyStyle = styled.div`
    background: black;
    color: white;
    height: 1150px;

    b {
        font-size: 30px;
    }

    button {
        cursor: pointer;
        position: absolute;
        top: 1400px;
        left: 1650px;
        padding: 3px;
        width: 107px;
        height: 34px;
        background: black;
        color: white;
        border: 1px solid white;
        border-radius: 0.5rem;
        :hover {
            background: #bdbdbd;
        }
    }

    .firstText {
        padding-top: 70px;
        margin-left: 160px;
        font-size: 16px;
        font-weight: 100;
    }

    .image1 {
        background-image:url(${s_image1});
        background-size: cover;
        width: 784px;
        height: 750px;
        
        border-radius: 1rem 1rem 0 0;
    }

    .image2 {
        background-image:url(${s_image2});
        background-size: cover;
        width: 392px;
        height: 330px;
        position: absolute;
        border-radius: 1rem 1rem 0 0;
    }

    .image3 {
        background-image:url(${s_image3});
        background-size: cover;
        width: 392px;
        height: 330px;
        position: absolute;
        border-radius: 1rem 1rem 0 0;
    }

    .image4 {
        background-image:url(${s_image4});
        background-size: cover;
        width: 800px;
        height: 392px;
        position: absolute;
    }

    .item-container1 {
        margin-top: 30px;
        margin-left: 160px;
        border-radius: 1rem;
        width: 784px;
        height: 820px;
        background: #2a2b27;
    }

    .item-container2 {
        border-radius: 1rem;
        width: 392px;
        height: 400px;
        position: absolute;
        left: 980px;
        top: 1568px;
        margin-bottom: 100px;
        margin-left: -20px;
        background: #2a2b27;
    }

    .item-container3 {
        border-radius: 1rem;
        width: 392px;
        height: 400px;
        position: absolute;
        left: 1390px;
        top: 1568px;
        background: #2a2b27;
        margin-left: -20px;
    }

    .item-container4 {
        border-radius: 1rem;
        width: 784px;
        height: 400px;
        position: absolute;
        left: 960px;
        top: 1975px;
        background: #2a2b27;
        padding-bottom: 50px;
    }

    .text1 {
        margin-top: 20px;
        margin-left: 15px;
    }

    .text2 {
        margin-top: 350px;
        margin-left: 10px;
    }

    .text3 {
        margin-top: 350px;
        margin-left: 10px;
    }

    .text4 {
        margin-top: 400px;
        margin-left: 10px;
    }
`;

export default SecondBodyStyle;

/*

.item-container3 {
        position: absolute;
        left: 1390px;
        top: 1570px;
    }

    .item-container4 {
        position: absolute;
        left: 980px;
        top: 1975px;
    }

*/