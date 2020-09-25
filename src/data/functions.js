const fetchEmployees = async () => {
  const response = await fetch("http://localhost/api/v1/employees");
  const data = await response.json();
  console.log(data);
  return data;
};

export { fetchEmployees };
