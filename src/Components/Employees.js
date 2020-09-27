import React, { useContext, useState, useMemo } from "react";

//CONTEXT
import EmployeesContext from "../data/context";

//COMPONENTS
import { StyledEmployees } from "../styled-components/StyledEmployees";
import Employee from "./Employee";

//FUNCTIONS
import { filteredEmployeesList } from "../data/functions";
// ACTION TYPE
import { FILTER_LIST_BY } from "../data/employeesReducer";

const Employees = () => {
  const [filter, setFilter] = useState({ index: 0 });
  const [text, setText] = useState("");

  // context state
  const { state, dispatch } = useContext(EmployeesContext);
  const { employeesList } = state;

  //ARRAY TO RENDER
  let renderedEmployeesList = filteredEmployeesList(
    employeesList,
    text,
    filter.index
  );

  return (
    <StyledEmployees>
      <>
        <div className="listHeader">
          <h2>Employees</h2>
          <input
            type="text"
            placeholder="filter"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
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
            {renderedEmployeesList.map((employee) => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </div>
          <div className="collection">
            <button
              disabled={filter.index < 1}
              onClick={() =>
                setFilter((prev) => ({ ...prev, index: prev.index - 5 }))
              }
            >
              -
            </button>
            <p>
              {filter.index + 1} to{" "}
              {filter.index + 5 > employeesList.length
                ? employeesList.length
                : filter.index + 5}{" "}
              of total :{employeesList.length}
            </p>
            <button
              disabled={filter.index + 6 > employeesList.length}
              onClick={() =>
                setFilter((prev) => ({ ...prev, index: prev.index + 5 }))
              }
            >
              +
            </button>
          </div>
        </div>
      </>
    </StyledEmployees>
  );
};

export default Employees;
