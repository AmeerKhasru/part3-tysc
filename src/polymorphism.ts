// Polymorphism

console.log("Polymorphism");

class Staff {
    protected _name: string;
    protected _salary: number;

    constructor(name: string, salary: number) {
        this._name = name;
        this._salary = salary;

    }

    public getName(): string {
        return this._name;
    }

    public calculateBonus(): number {
        return this._salary * 0.1; // সাধারণ বোনাস হিসাব
    }

}    

class Manager extends Staff {
    private _teamSize: number;

    constructor(name: string, salary: number, teamSize: number) {
        super(name, salary);
        this._teamSize = teamSize;
    }

    // মেথড ওভাররাইডিং (Method Overriding)
    public override calculateBonus(): number {
        return this._salary * 0.2 + this._teamSize * 100; // ম্যানেজারের জন্য বোনাস হিসাব
    }

}    

class Developer extends Staff {
    private _programmingLanguage: string;
    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this._programmingLanguage = programmingLanguage;
    }

    // মেথড ওভাররাইডিং (Method Overriding)
    public override calculateBonus(): number {
        return this._salary * 0.15; // ডেভেলপারের জন্য বোনাস হিসাব
    }
}

const staffs : Staff[] = [
    new Staff("Alice", 50000),
    new Manager("Bob", 80000, 5),
    new Developer("Charlie", 60000, "TypeScript")
];

for (const staff of staffs) {
    console.log(`${staff.getName()} gets a bonus of $${staff.calculateBonus()}.`);
}