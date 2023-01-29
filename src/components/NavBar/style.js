import styled from "styled-components";

export const NavBarLayout = styled.div`
  .logo {
    width: 150px;
    height: 55px;
    background: linear-gradient(10deg, rgba(58,82,183,1) 35%, rgba(255,255,255,1) 38%);
    background-size: cover;
    background-repeat: no-repeat;
    border:solid 2px #050761;
    box-shadow:  5px 5px 2px #050761;
    margin: 8px 24px 8px 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background     :linear-gradient(60deg, rgba(0,172,193,0.43) 0%,rgba(84,58,183,0.89)  100%);
  box-shadow: 0px -5px 54px 4px rgba(0,0,0,0.55);
  color: white;
  font-family: Helvetica;
  font-weight: 300;
`;