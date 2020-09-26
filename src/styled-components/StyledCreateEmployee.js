import styled from "styled-components";

export const StyledCreateEmployee = styled.div`
  width: 100%;
  padding-top: 7rem;
  form {
    margin: 0 auto;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    input {
      text-align: center;
      height: 2rem;
      margin: 0.5rem 0;
      input:focus {
        outline-color: blue;
      }
    }
    button {
      max-width: 10rem;
      width: 10rem;
      text-align: center;
      height: 2rem;
      margin: 0.5rem 0;
      background: linear-gradient(
        0deg,
        rgba(110, 159, 255, 1) 0%,
        rgba(0, 130, 249, 1) 50%,
        rgba(84, 142, 255, 1) 100%
      );

      border: none;
      color: #fff;
      :hover {
        color: #ccc;
      }
    }
  }
`;
