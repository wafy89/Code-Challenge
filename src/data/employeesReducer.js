// FUNCTIONS IMPORTS
import { fetchEmployees, fetchEmp } from "./functions";

// ACTION TYPES
const UPDATE_EMPLOYEES = "get-all-employees";
const FILTER_LIST_BY = "get-one-employee";
const TOGGLE_MANAGER_CHECK = "toggle-manager-check";
const EMPLOYEE_FIELDS_UPDATE = "employee-fields-update";

//EMPLOYEES REDUCER
const employeesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEES: {
      return {
        ...state,
        employeesList: action.payload,
      };
    }
    case EMPLOYEE_FIELDS_UPDATE: {
      const { field, value } = action;
      return {
        ...state,
        fields: { ...state.fields, [field]: value },
      };
    }
    case FILTER_LIST_BY: {
      const { byField } = action;
      let newEmployeesList = state.employeesList;
      if (byField === "employee_manager") {
        newEmployeesList.sort((a, b) => (a[byField] < b[byField] ? 1 : -1));
      } else {
        newEmployeesList.sort((a, b) => (a[byField] > b[byField] ? 1 : -1));
      }
      return {
        ...state,
        employeesList: newEmployeesList,
      };
    }
    case TOGGLE_MANAGER_CHECK: {
      const { id } = action;
      let newEmployeesList = state.employeesList.map((item) =>
        item.id === id
          ? { ...item, employee_manager: !item.employee_manager }
          : item
      );
      return {
        ...state,
        employeesList: newEmployeesList,
      };
    }

    default:
      return state;
  }
};

export {
  employeesReducer,
  UPDATE_EMPLOYEES,
  EMPLOYEE_FIELDS_UPDATE,
  FILTER_LIST_BY,
  TOGGLE_MANAGER_CHECK,
};
