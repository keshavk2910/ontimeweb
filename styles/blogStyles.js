import styled from "styled-components";

export const BlogTop = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.35);
  -webkit-transform: translateZ(0.4px);
  transform: translateZ(0.4px);
  background: ${props =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.25)), url(${props.bgimg})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  div {
    display: block;
    color: #fff;
  }
  h1 {
    font-size: 90px;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    text-align: center;
    margin-bottom: 20px;
    text-transform: capitalize;
  }
`;
export const BlogSection = styled.section`
  padding: 100px 50px;
  background-color: #f6f9fc;
  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;
