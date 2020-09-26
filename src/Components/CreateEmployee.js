import React, { useContext, useState } from "react";
import EmployeesContext from "../data/context";
import { StyledCreateEmployee } from "../styled-components/StyledCreateEmployee";
import { EMPLOYEE_FIELDS_UPDATE } from "../data/employeesReducer";

import { submitNewEmployee, updateEmployeeData } from "../data/functions";

const CreateEmployee = (props) => {
  //check if it is create-new-employee call or edit employee via checking the route-path
  const create = props.path && props.path === "/new";
  const { state, dispatch } = useContext(EmployeesContext);
  const fields = create ? state.fields : props;

  const [edit, setEdit] = useState(false);
  // if redirected with ID it should be updateEmployee else create a newOne
  const submit = create ? submitNewEmployee : updateEmployeeData;

  return (
    <StyledCreateEmployee>
      <form onSubmit={(e) => submit(e, fields)}>
        <input
          min="18"
          max="70"
          type="number"
          name="employee_age"
          placeholder="Age"
          disabled={!create && !edit}
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
          disabled={!create && !edit}
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
          disabled={!create && !edit}
          value={Number(fields.employee_salary) || ""}
          onChange={(e) =>
            dispatch({
              type: EMPLOYEE_FIELDS_UPDATE,
              field: e.target.name,
              value: e.target.value,
            })
          }
        />

        {create ? (
          <button type="submit">Create</button>
        ) : edit ? (
          <>
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEdit(false)}>
              cancel
            </button>
          </>
        ) : (
          <button onClick={() => setEdit(true)} type="button">
            edit
          </button>
        )}
      </form>
    </StyledCreateEmployee>
  );
};

export default CreateEmployee;
