import React from "react";

import Employees from "./Employees";

import { StyledHome } from "../styled-components/StyledHome";

const Home = () => {
  return (
    <StyledHome>
      <>
        <Employees />
      </>
    </StyledHome>
  );
};

export default Home;
