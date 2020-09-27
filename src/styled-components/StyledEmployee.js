import styled from "styled-components";

export const StyledEmployee = styled.div`
  display: flex;
  height: 2rem;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  height: 3rem;
  border: 1px solid rgb(54, 54, 54);
  border-radius: 0.5rem;
  font-size: 1rem;
  :hover {
    background-color: rgb(106, 106, 109);
  }
  input {
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  div {
    width: 25%;
  }
  a,
  a:visited,
  a:link,
  a:hover,
  a:active {
    width: 75%;
    display: flex;
    height: 2rem;
    justify-content: space-evenly;
    align-items: center;
    color: rgb(54, 54, 54);
  }
`;
