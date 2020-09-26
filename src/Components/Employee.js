import React from "react";
import { Link } from "@reach/router";
import { StyledEmployee } from "../styled-components/StyledEmployee";

const Employee = ({ employee }) => {
  return (
    <StyledEmployee>
      <Link to={`/${employee.id}`}>
        <div>{employee.employee_age}</div>
        <div>{employee.employee_name}</div>
        <div>{employee.employee_salary}</div>
      </Link>
    </StyledEmployee>
  );
};

export default Employee;
