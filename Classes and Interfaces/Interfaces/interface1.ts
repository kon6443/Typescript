type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10


// Difference between type and interface.
// Below two Player are similar.
type Player = {
    nickName: string,
    team: Team
    health: Health
}
// interface is used for only one reason which is to explain typescript the shape of an object. 
// They feel like sort of working with classes. 
interface Player {
    nickName: string,
    team: Team
    health: Health
}
// 

const nico: Player = {
    nickName: "nico",
    team: "red",
    health: 10
}

//  Below two types of User are not allowed to use at the same time since they type.
// Interfaces are allowed to use in the similar way.

// type User = {
//     name: string
// }
// type User = {
//     lasdtName: string
// }

// Interfaces are used only when you are explaining the shape of an object to typescript.
// Interface feels more likely Object Oriented Programming. 

interface User {
    name: string
}

interface User {
    lastName: string
}

interface User {
    health: number
}

const nico: User = {
    name: 'nico',
    lastName: 'last',
    health: 10
}

console.log(nico);