type Age = number;
type Name = string;

type Player = {
    name: Name,
    age?: Age // optional type declaratioin.
}

const nico : Player = {
    name: "nico"
}

const lynn: Player = {
    name: "lynn",
    age: 20
}

console.log(nico);
console.log(lynn);

const playerMaker = (name:Name) : Player => ({name});
// function playerMaker(name: Name) : Player { // telling that the return type is a Player object
//     return {
//         name: name
//     }
// }

let five = playerMaker('five');
five.age = 20;
console.log(five);

// any: any type of type
// undefined: declaration X, initialization X
// null: declaration O, initializaton X

type Add = (a: number, b: number) => number;
const add:Add = (a, b) => a+b;
console.log(add(1,2));


// overloading
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => { 
    if(typeof config === "string") { console.log(config) }
    else {
        console.log(config.path, config.state)
    }
}
