
class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string
    ) {
        this.fullName = `${firstName} ${middleName} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}
 
// let user = { firstName: "Travis", lastName: "Scott" };
let user = new Student('George', 'Walker', 'Bush');
// let user = [0, 1, 2];

console.log(greet(user));

