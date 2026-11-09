// 1. Parent Class (Base Class বা Super Class)
console.log("Inheritance");
class Employee {
    protected _name: string; // 'protected' দেওয়ার কারণে সাব-ক্লাস বা চাইল্ড ক্লাস থেকে সরাসরি এক্সেস করা যাবে
    protected _salary: number;

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

// 2. Child Class (Derived Class বা Sub Class)
// 'extends' কিওয়ার্ড দিয়ে Manager ক্লাসটি Employee থেকে সমস্ত বৈশিষ্ট্য ইনহেরিট বা উত্তরাধিকার সূত্রে পাচ্ছে
class Manager extends Employee {
    private _teamSize: number; // ম্যানেজারের নিজস্ব প্রপার্টি (টিমে কতজন কাজ করে)

    constructor(name: string, salary: number, teamSize: number) {
        super(name, salary); // super() দিয়ে Parent ক্লাসের constructor-কে কল করা হলো
        this._teamSize = teamSize;
    }

    // ম্যানেজারের নিজস্ব মেথড
    public getTeamSize(): number {
        return this._teamSize;
    }

    // মেথড ওভাররাইডিং (Method Overriding) - প্যারেন্ট ক্লাসের মেথডকে চাইল্ড ক্লাসে নিজের মতো মডিফাই করা
    public getDetails(): string {
        return `${this._name} manages a team of ${this._teamSize} people and earns $${this._salary}.`;
    }
}

// --- কোড টেস্ট করার জন্য অবজেক্ট তৈরি ---

// সাধারণ Employee অবজেক্ট
const emp1 = new Employee("Amir", 50000);
console.log(emp1.getName()); // Amir

// Manager অবজেক্ট (যে Employee-এর সব বৈশিষ্ট্য ইনহেরিট করেছে)
const mgr1 = new Manager("Rahim", 80000, 5);

console.log(mgr1.getName());     // Rahim (এটি Employee ক্লাস থেকে পেয়েছে)
console.log(mgr1.getSalary());   // 80000 (এটিও Employee ক্লাস থেকে পেয়েছে)
console.log(mgr1.getTeamSize()); // 5 (এটি Manager ক্লাসের নিজস্ব)
console.log(mgr1.getDetails());  // Rahim manages a team of 5 people and earns $80000.

export {};