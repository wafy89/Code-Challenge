import styled from "styled-components";

export const StyledHeader = styled.div`
  z-index: 5;
  position: fixed;
  width: 100vw;
  height: 4rem;
  top: 0;
  left: 0;
  right: 0;
  background-color: blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  filter: drop-shadow(0px 0.2rem 0.2rem rgba(0, 0, 0, 0.25));
  background: rgb(110, 159, 255);
  background: linear-gradient(
    0deg,
    rgba(110, 159, 255, 1) 0%,
    rgba(0, 130, 249, 1) 50%,
    rgba(84, 142, 255, 1) 100%
  );
  padding: 0 5rem;
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
  a {
    margin: 0 1rem;
  }
  a:link,
  a:visited,
  a:link {
    color: rgb(253, 253, 253);
  }
  a:hover {
    color: rgb(223, 223, 223);
  }
`;
