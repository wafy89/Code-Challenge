const fetchEmployees = async () => {
  const response = await fetch("http://localhost/api/v1/employees");
  const data = await response.json();
  //adding checked false to every employee
  const finalData = data.map((item) => ({ ...item, employee_manager: false }));
  return finalData;
};
const updateEmployeeData = async (e, contextFields, propsFields) => {
  e.preventDefault();
  // check if age or salary become smaller
  if (Number(contextFields.employee_age) < Number(propsFields.employee_age))
    window.alert("age value become smaller");
  if (
    Number(contextFields.employee_salary) < Number(propsFields.employee_salary)
  )
    window.alert("age value become smaller");
  //check if any field is not filled

  for (let [key, value] of Object.entries(contextFields)) {
    if (key === "profile_image") continue;
    if (!value) throw new Error(key, "must be filld");
  }

  try {
    const response = await fetch(
      `http://localhost/api/v1/update/${propsFields.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contextFields),
      }
    );
    if (response.ok) window.location = "http://localhost:8080/";
  } catch (err) {
    window.alert("Error !!! ", err);
  }
};

const submitNewEmployee = async (e, data) => {
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
    if (response.ok) window.location = "http://localhost:8080/";
  } catch (err) {
    window.alert("Error !!! ", err);
  }
};

export { fetchEmployees, submitNewEmployee, updateEmployeeData };
