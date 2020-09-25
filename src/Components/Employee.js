import React from "react";

import { StyledEmployee } from "../styled-components/StyledEmployee";

const Employee = (employee) => {
  return (
    <StyledEmployee>
      <div></div>
      <div>{employee.employee_age}</div>
      <div>{employee.employee_name}</div>
      <div>{employee.employee_salary}</div>
    </StyledEmployee>
  );
};

export default Employee;
