function createEmployeesObject(departmentName, employees) {
    // Create an object with the department name as the key and the employees array as the value
    let employeesObject = {};
    employeesObject[departmentName] = employees;
    return employeesObject;
}
