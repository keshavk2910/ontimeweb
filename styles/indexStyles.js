import styled from "styled-components";

export const SectionMain = styled.section`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.35);
  -webkit-transform: translateZ(0.4px);
  transform: translateZ(0.4px);
  background: ${props =>
    `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.25)), url(${props.bgimg})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  & .content-main {
    display: block;
    color: #fff;
    h1 {
      font-size: 90px;
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      text-align: center;
      margin-bottom: 20px;
      text-transform: capitalize;
    }
    p {
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      font-size: 25px;
      font-weight: 600;
      text-align: center;
      margin-bottom:30px;
    }
  }
`;
export const Section2 = styled.section`
  padding: 80px 0;
  h2 {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 60px;
    margin-bottom: 20px;
    font-weight: 900;
  }
  p {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    font-family: "Helvetica", Arial, sans-serif;
    margin-bottom: 20px;
  }
`;
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
export const ServicesSection = styled.section`
padding: 100px 50px;
  background-color: #f6f9fc;
  text-align: center;
  @media (max-width: 768px) {
      padding: 50px 10px;
  }
`