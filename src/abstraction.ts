//Abstraction

console.log("Abstraction");

abstract class TeamMember {
    protected _name: string;
    protected _salary: number;

    constructor(name: string, salary: number) {
        this._name = name;
        this. _salary = salary;
    }

    public getName(): string {
        return this._name;
    }

    public abstract calculateBonus(): number ;

}

class TeamLeader extends TeamMember {
    private _teamSize: number;

    constructor(name: string, salary: number, teamSize: number) {
        super (name, salary);
        this._teamSize = teamSize;
    }

    public calculateBonus(): number {
        return this._teamSize * 1000;
    }
}

class programmer extends TeamMember {

    private _programmingLanguage: string;

    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this._programmingLanguage = programmingLanguage;
    }

    public calculateBonus(): number {
        return this._salary * 0.1;
    }
}

const teamMembers: TeamMember[] = [
    new TeamLeader("Alice", 80000, 5),
    new programmer("Bob", 60000, "TypeScript")
];


for (const member of teamMembers) {
    console.log(`${member.getName()} gets a bonus of $${member.calculateBonus()}.`);
}

