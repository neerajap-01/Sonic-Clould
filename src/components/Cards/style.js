import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 320px;
  border-radius: 20px;
  background: url(${({ image }) => image}) no-repeat center center;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #008bf8;
    color: #fff;
    font-size: 1rem;
    padding: .5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
   }
  
   &:hover {
    border-color: #00Aeef;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
   }
   
    &:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
    }
`;

export const CardDetails = styled.div`
  color: black;
  height: 100%;
  gap: .5em;
  display: grid;
  place-content: center;
`;

export const CardBody = styled.p`
  color: rgb(134, 134, 134);
`;

export const CardTitle = styled.p`
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
`;