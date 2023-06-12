var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
    }
    return Student;
}());
function greet(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!";
}
// let user = { firstName: "Travis", lastName: "Scott" };
var user = new Student('George', 'Walker', 'Bush');
// let user = [0, 1, 2];
console.log(greet(user));
