import styled from 'styled-components';

export const WorkTop = styled.div`
height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.35);
    -webkit-transform: translateZ(0.4px);
    transform: translateZ(0.4px);
    background: ${props =>
        `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${props.bgimg})`};
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    div {
        display: block;
    color: #fff;

    h1{
        font-size: 90px;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        text-align: center;
        margin-bottom: 20px;
        text-transform: capitalize;
    }
    }
`
export const FeaturedTitle = styled.div`
padding: 25px;
  text-align: center;
  background: #833ab4;
  background: -moz-linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
  background: -webkit-linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
  background: linear-gradient(90deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#833ab4",endColorstr="#fcb045",GradientType=1); 
  h2 {
    color: #fff;
    font-size: 55px;
    font-family: "Roboto", Arial, Helvetica, sans-serif; }
`