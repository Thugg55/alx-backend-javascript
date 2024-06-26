function createEmployeesObject(departmentName, employees) {
    // Create an object with the department name as the key and the employees array as the value
    return {
	 [`${departmentName}`]: employees,
  };
}
}
