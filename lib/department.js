// The first class is an Department parent class with the following properties and methods:
// id
// name
// getId()
// getName() // Returns 'Department'


class Department {
    constructor(id, name) {
        this.is = id;
        this.name = name;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}

module.exports = Department;