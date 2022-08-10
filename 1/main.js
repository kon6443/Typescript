var nico = {
    name: "nico"
};
var lynn = {
    name: "lynn",
    age: 20
};
console.log(nico);
console.log(lynn);
var playerMaker = function (name) { return ({ name: name }); };
// function playerMaker(name: Name) : Player { // telling that the return type is a Player object
//     return {
//         name: name
//     }
// }
var five = playerMaker('five');
five.age = 20;
console.log(five);
var add = function (a, b) { return a + b; };
console.log(add(1, 2));
