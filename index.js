const employee={
    name:"Sam",
    streetAddress:"0000"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const worker = {...employee}
    worker[key] = value;
    return worker;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const worker = {...employee}
    delete worker[key];
    return worker;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const clone = {...employee};
    delete clone[key];
    delete employee[key];
    console.log(employee,clone);
    return clone;
}

destructivelyDeleteFromEmployeeByKey(employee, 'name')




