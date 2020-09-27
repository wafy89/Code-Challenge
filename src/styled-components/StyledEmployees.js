import styled from "styled-components";

export const StyledEmployees = styled.div`
  padding-top: 6rem;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  min-height: 80vh;
  font-size : 1rem;
  
  }
  .listHeader {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bolder;
    line-height:3rem;
    input{
      height:2rem;
      width:20rem;
      border-radius:.3rem;
      padding :0 1rem;
      font-size:1rem;
    }
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
      font-weight: bolder;
      
    }
  }
  .collection {
    margin-top:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 0 1rem;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color:rgb(234, 239, 255);
      cursor: pointer;
    }
`;
