//encapsulation

console.log("Encapsulation");

class Employee {
    private _name: string;
    private _salary: number;

    constructor(name: string, salary: number) {
        this._name = name;
        this._salary = salary;
    }

    public getName(): string {
        return this._name;
    }

    public getSalary(): number {
        return this._salary;
    }

    public setSalary(salary: number): void {
        if (salary > 0) {
            this._salary = salary;
        }
    }
}

const employee = new Employee("Alice", 50000);
console.log(employee.getName());
console.log(employee.getSalary());
employee.setSalary(60000);
console.log(employee.getSalary());