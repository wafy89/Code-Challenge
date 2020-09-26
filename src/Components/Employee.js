import React, { useContext } from "react";
import { Link } from "@reach/router";
import { StyledEmployee } from "../styled-components/StyledEmployee";
import { TOGGLE_MANAGER_CHECK } from "../data/employeesReducer";
import EmployeesContext from "../data/context";

const Employee = ({ employee }) => {
  const { dispatch } = useContext(EmployeesContext);
  return (
    <StyledEmployee>
      <input
        type="checkbox"
        checked={employee.employee_manager}
        onChange={() =>
          dispatch({ type: TOGGLE_MANAGER_CHECK, id: employee.id })
        }
      />{" "}
      <Link getProps={() => true} state={employee} to={`/${employee.id}`}>
        <div>{employee.employee_age}</div>
        <div>{employee.employee_name}</div>
        <div>{employee.employee_salary}</div>
      </Link>
    </StyledEmployee>
  );
};

export default Employee;
