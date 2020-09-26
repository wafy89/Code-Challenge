const fetchEmployees = async () => {
  const response = await fetch("http://localhost/api/v1/employees");
  const data = await response.json();
  return data;
};
const updateEmployeeData = () => {};
const submitNewEmployee = async (e, data, errorCB) => {
  e.preventDefault();
  /*   for (let [key, value] of Object.entries(data)) {
    if (!value) errorCB({ type, [key]: "must be filld" });
  } */
  try {
    const response = await fetch("http://localhost/api/v1/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export { fetchEmployees, submitNewEmployee, updateEmployeeData };
