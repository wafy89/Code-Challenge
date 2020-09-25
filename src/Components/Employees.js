import React from "react";

import { StyledEmployees } from "../styled-components/StyledEmployees";

const Employees = () => {
  return (
    <StyledEmployees>
      <>
        <div className="listHeader">
          <h3>Employees</h3>
          <input type="text" placeholder="filter" />
        </div>
        <div className="listBody">
          <div className="listTitles">
            <div> </div>
            <div>Age</div>
            <div>Name</div>
            <div>Salary</div>
          </div>
          <div className="employeesList">list</div>
        </div>
      </>
    </StyledEmployees>
  );
};

export default Employees;
