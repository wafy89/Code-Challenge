import styled from "styled-components";

export const StyledEmployee = styled.div`
  display: flex;
  height: 2rem;
  justify-content: space-around;
  align-items: center;

  margin-top: 2rem;
  border-bottom: 1px solid #333;
  input {
    width: 25%;
    display: flex;

    justify-content: space-around;
    align-items: center;
  }
  div {
    width: 25%;
  }
  a {
    width: 75%;
  }
  a,
  a:visited,
  a:link,
  a:hover,
  a:active {
    display: flex;
    height: 2rem;
    justify-content: space-evenly;
    align-items: center;
  }
  :hover {
    background-color: red;
  }
`;
