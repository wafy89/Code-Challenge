import React, { useEffect, useContext } from "react";
// COMPONENTS
import { StyledHome } from "../styled-components/StyledHome";
import Employees from "./Employees";
//FUNCTIONS
import { fetchEmployees } from "../data/functions";
import { UPDATE_EMPLOYEES } from "../data/employeesReducer";
//CONTEXT
import EmployeesContext from "../data/context";

const Home = () => {
  console.log("render");
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
