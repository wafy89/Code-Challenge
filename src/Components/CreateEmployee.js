import React, { useContext } from "react";
import EmployeesContext from "../data/context";
import { StyledCreateEmployee } from "../styled-components/StyledCreateEmployee";
import { EMPLOYEE_FIELDS_UPDATE } from "../data/employeesReducer";

import { submitNewEmployee, updateEmployeeData } from "../data/functions";

const CreateEmployee = () => {
  const { state, dispatch } = useContext(EmployeesContext);
  const { fields } = state;
  const {
    match: { params },
  } = this.props;

  // if redirected with ID it should be updateEmployee else create a newOne
  const submit = params ? updateEmployeeData : submitNewEmployee;

  return (
    <StyledCreateEmployee>
      <form onSubmit={(e) => submit(e, fields)}>
        <input
          min="18"
          max="70"
          type="number"
          name="employee_age"
          placeholder="Age"
          value={Number(fields.employee_age) || ""}
          onChange={(e) =>
            dispatch({
              type: EMPLOYEE_FIELDS_UPDATE,
              field: e.target.name,
              value: e.target.value,
            })
          }
        />
        <input
          type="text"
          name="employee_name"
          placeholder="Full Name"
          value={fields.employee_name}
          onChange={(e) =>
            dispatch({
              type: EMPLOYEE_FIELDS_UPDATE,
              field: e.target.name,
              value: e.target.value,
            })
          }
        />

        <input
          min="1000"
          type="number"
          name="employee_salary"
          placeholder="salary"
          value={Number(fields.employee_salary) || ""}
          onChange={(e) =>
            dispatch({
              type: EMPLOYEE_FIELDS_UPDATE,
              field: e.target.name,
              value: e.target.value,
            })
          }
        />

        <button type="submit">Create</button>
      </form>
    </StyledCreateEmployee>
  );
};

export default CreateEmployee;
