import styled from 'styled-components';

export const AboutTop = styled.div`
height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.35);
    -webkit-transform: translateZ(0.4px);
    transform: translateZ(0.4px);
    background: ${props =>
        `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)), url(${props.bgimg})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    div {
        display: block;
        color: #fff;
    }
    h1{
        font-size: 90px;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        text-align: center;
        margin-bottom: 20px;
        text-transform: capitalize;
    }
`
export const AboutSection = styled.section`
padding: 20px 50px;
@media (max-width: 768px) {
        padding: 20px 20px;
}
`
export const AboutContent = styled.section`
padding: 80px 0;
h2 {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 60px;
    margin-bottom: 20px;
    font-weight: 900; }
    p {
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        font-family: "Helvetica", Arial, sans-serif;
        margin-bottom: 20px; }
`