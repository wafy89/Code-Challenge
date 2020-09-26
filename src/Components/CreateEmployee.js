import React, { useContext, useState, useMemo } from "react";
import { Link } from "@reach/router";
import EmployeesContext from "../data/context";
import { StyledCreateEmployee } from "../styled-components/StyledCreateEmployee";
import { EMPLOYEE_FIELDS_UPDATE } from "../data/employeesReducer";

import { submitNewEmployee, updateEmployeeData } from "../data/functions";

const CreateEmployee = (props) => {
  console.log(props);
  //check if it is create-new-employee call or edit employee via checking the route-path
  const create = props.path && props.path === "/new";

  const { state, dispatch } = useContext(EmployeesContext);
  const [edit, setEdit] = useState(false);
  const contextFields = state.fields;
  const propsFields = props.location.state;
  // if redirected with ID it should be updateEmployee else create a newOne            create || edit ?
  const submit = create
    ? (e, v) => submitNewEmployee(e, contextFields)
    : (e, v) => updateEmployeeData(e, contextFields, propsFields);

  return (
    <StyledCreateEmployee>
      <form onSubmit={submit}>
        {edit ? <span> old age value:{propsFields.employee_age}</span> : ""}
        <input
          min="18"
          max="70"
          type="number"
          name="employee_age"
          placeholder="Age"
          disabled={!create && !edit}
          value={
            create || edit
              ? Number(contextFields.employee_age) || ""
              : Number(propsFields.employee_age) || ""
          }
          onChange={(e) =>
            dispatch({
              type: EMPLOYEE_FIELDS_UPDATE,
              field: e.target.name,
              value: e.target.value,
            })
          }
        />
        {edit ? <span>old name value:{propsFields.employee_name}</span> : ""}
        <input
          type="text"
          name="employee_name"
          placeholder="Full Name"
          disabled={!create && !edit}
          value={
            create || edit
              ? contextFields.employee_name
              : propsFields.employee_name
          }
          onChange={(e) =>
            dispatch({
              type: EMPLOYEE_FIELDS_UPDATE,
              field: e.target.name,
              value: e.target.value,
            })
          }
        />
        {edit ? (
          <span>old salary value:{propsFields.employee_salary}</span>
        ) : (
          ""
        )}
        <input
          min="1000"
          type="number"
          name="employee_salary"
          placeholder="salary"
          disabled={!create && !edit}
          value={
            create || edit
              ? Number(contextFields.employee_salary) || ""
              : Number(propsFields.employee_salary) || ""
          }
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
