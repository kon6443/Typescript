
interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}
 
let user = { firstName: "Travis", lastName: "Scott" };
// let user = [0, 1, 2];

console.log(greet(user));

