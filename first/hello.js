function greet(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}
var user = { firstName: "Travis", lastName: "Scott" };
// let user = [0, 1, 2];
console.log(greet(user));
