import React, { useReducer, useMemo, useEffect } from "react";
import { Router } from "@reach/router";

// Components Imports
import Home from "./Home";
import Header from "./Header";

//Styled-Components Imports
import { GlobalStyle } from "../styled-components/GlobalStyle";

//Context
import EmployeesContext from "../data/context";

// REDUCER
import { employeesReducer, UPDATE_EMPLOYEES } from "../data/employeesReducer";

//FUNCTIONS
import { fetchEmployees } from "../data/functions";

function App() {
  const [state, dispatch] = useReducer(employeesReducer, {});
  //preventing rerenders because of App rerenders => nested components rerenders
  console.log(state);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  const onMountFetch = async () => {
    let employees;
    try {
      employees = await fetchEmployees();
      dispatch({ type: UPDATE_EMPLOYEES, payload: employees });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchEmployees = async () => {
    const response = await fetch("http://localhost/api/v1/employees");
    const data = await response.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    onMountFetch();
  }, []);
  return (
    <EmployeesContext.Provider value={(state, dispatch)}>
      <>
        <Header />
        <Router>
          <Home path="/" />
        </Router>
      </>
    </EmployeesContext.Provider>
  );
}

export default App;
