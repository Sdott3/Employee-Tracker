// The first class is an Employee parent class with the following properties and methods:
// id
// first_name
// last_name
// role_id
// manager_id
// getId()
// getFirstName() 
// getLastName()
// getRoleId
// getManagerId() // Returns 'Employee'

class Employee {
    constructor(id, first_name, last_name, role_id){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = role_id;
        this.manager_id = null;
    }

    getId() {
        return this.id;
    }

    getFirstName() {
        return this.first_name;
    }

    getLastName() {
        return this.last_name;
    }

    getRoleId() {
        return this.role_id;
    }

    getManagerId() {
        return this.manager_id;
    }

    setRoleId(id) {
        this.role_id = id
    }
    setManagerId(id) {
        this.manager_id = id
    }
}

module.exports = Employee;