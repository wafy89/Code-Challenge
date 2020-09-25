// FUNCTIONS IMPORTS
import { fetchEmployees, fetchEmp } from "./functions";

// ACTION TYPES
const UPDATE_EMPLOYEES = "get-all-employees";
const GET_ONE_EMPLOYEE = "get-one-employee";
const CREATE_EMPLOYEE = "create-employee";
const UPDATE_EMPLOYEE = "update-employee";

const fun = () => fetchEmployees();

//EMPLOYEES REDUCER
const employeesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEES: {
      return {
        ...state,
        employeesList: action.paylod,
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true,
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

export { employeesReducer, UPDATE_EMPLOYEES };
