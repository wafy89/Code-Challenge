import styled from "styled-components";

export const StyledEmployees = styled.div`
  padding-top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  min-height: 80vh;
  //border-top: 1px solid #999;
  border-radius: 5px;
  max-width: 90%;
  .collection {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 0 1rem;
      width: 1rem;
      height: 1rem;
    }
  }
  .listHeader {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: bolder;
  }
  .listBody {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    .listTitles {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 2rem;
      border-bottom: 1px solid #333;
      font-weight: bolder;
    }
  }
`;
