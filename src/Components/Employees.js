import React, { useContext } from "react";
import EmployeesContext from "../data/context";
import { StyledEmployees } from "../styled-components/StyledEmployees";
import Employee from "./Employee";
import { FILTER_LIST_BY } from "../data/employeesReducer";
const Employees = () => {
  // context state
  const { state, dispatch } = useContext(EmployeesContext);
  const { employeesList } = state;

  return (
    <StyledEmployees>
      <>
        <div className="listHeader">
          <h2>Employees</h2>
          <input type="text" placeholder="filter" />
        </div>
        <div className="listBody">
          <div className="listTitles">
            <div
              name="employee_manager"
              onClick={(e) =>
                dispatch({ type: FILTER_LIST_BY, byField: "employee_manager" })
              }
            >
              Manager
            </div>
            <div
              name="employee_age"
              onClick={(e) =>
                dispatch({ type: FILTER_LIST_BY, byField: "employee_age" })
              }
            >
              Age
            </div>
            <div
              onClick={(e) =>
                dispatch({ type: FILTER_LIST_BY, byField: "employee_name" })
              }
            >
              Name
            </div>
            <div
              onClick={(e) =>
                dispatch({ type: FILTER_LIST_BY, byField: "employee_salary" })
              }
            >
              Salary
            </div>
          </div>
          <div>
            {employeesList.map((employee) => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      </>
    </StyledEmployees>
  );
};

export default Employees;
