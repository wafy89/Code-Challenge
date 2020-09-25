import styled from "styled-components";

export const StyledHeader = styled.div`
  z-index: 5;
  position: fixed;
  width: 100vw;
  height: 5rem;
  top: 0;
  left: 0;
  right: 0;
  background-color: blue;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  filter: drop-shadow(0px 0.7rem 0.7rem rgba(0, 0, 0, 0.25));
  background: rgb(110, 159, 255);
  background: linear-gradient(
    0deg,
    rgba(110, 159, 255, 1) 0%,
    rgba(0, 130, 249, 1) 50%,
    rgba(84, 142, 255, 1) 100%
  );
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  a:link,
  a:visited,
  a:link {
    color: #fff;
  }
  a:hover {
    color: #aaa;
  }
`;
