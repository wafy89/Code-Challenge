// FUNCTIONS IMPORTS
import { fetchEmployees, fetchEmp } from "./functions";

// ACTION TYPES
const UPDATE_EMPLOYEES = "get-all-employees";
const FILTER_LIST_BY = "get-one-employee";
const CREATE_EMPLOYEE = "create-employee";
const EMPLOYEE_FIELDS_UPDATE = "employee-fields-update";
const UPDATE_EMPLOYEE = "update-employee";

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
      newEmployeesList.sort((a, b) => (a[byField] > b[byField] ? 1 : -1));
      return {
        ...state,
        employeesList: newEmployeesList,
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password!",
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "logOut": {
      return {
        ...state,
        isLoggedIn: false,
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
};
