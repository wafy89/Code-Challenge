import React, { useReducer, useMemo, useEffect } from "react";
import { Router } from "@reach/router";

// Components Imports
import Home from "./Home";
import Header from "./Header";
import CreateEmployee from "./CreateEmployee";

//Styled-Components Imports
import { GlobalStyle } from "../styled-components/GlobalStyle";

//Context
import EmployeesContext from "../data/context";

// REDUCER
import { employeesReducer, UPDATE_EMPLOYEES } from "../data/employeesReducer";

const initialState = {
  fields: {
    employee_age: 0,
    employee_name: "",
    employee_salary: 0,
    profile_image: "",
  },
  employeesList: [],
  isLoading: false,
  error: "",
};

function App() {
  //initiate useReducer
  const [state, dispatch] = useReducer(employeesReducer, initialState);

  //preventing rerenders because of App rerenders => nested components rerenders
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <EmployeesContext.Provider value={contextValue}>
      <>
        <Header />
        <Router>
          <Home path="/" />
          <CreateEmployee path="/new" />
        </Router>
      </>
      <GlobalStyle />
    </EmployeesContext.Provider>
  );
}

export default App;
