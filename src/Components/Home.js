import React, { useEffect, useContext } from "react";

import Employees from "./Employees";

import { StyledHome } from "../styled-components/StyledHome";

//FUNCTIONS
import { fetchEmployees } from "../data/functions";
import { UPDATE_EMPLOYEES } from "../data/employeesReducer";

import EmployeesContext from "../data/context";

const Home = () => {
  const { dispatch } = useContext(EmployeesContext);
  useEffect(() => {
    fetchEmployees().then((employees) =>
      dispatch({ type: UPDATE_EMPLOYEES, payload: employees })
    );
  }, []);
  return (
    <StyledHome>
      <>
        <Employees />
      </>
    </StyledHome>
  );
};

export default Home;
