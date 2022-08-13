type PlayerA = {
    name: string
}

type PlayerAA = PlayerA & {
    lastName: string
}

const playerA: PlayerAA = {
    name: "nico",
    lastName: "xxx"
}

console.log('playera: ', playerA);

interface PlayerB {
    name: string
}

interface PlayerBB extends PlayerB {
    lastName: string
}

interface PlayerB {
    health: number
}

const playerB: PlayerBB = {
    name: "nico",
    lastName: "xxx",
    health: 10
}

console.log('playerB: ', playerB);

type PlayerC = {
    firstName: string
}

interface PlayerD {
    firstName: string
}

class UserA implements PlayerC {
    constructor(
        public firstName: string
    ) {}
}

class UserB implements PlayerD {
    constructor(
        public firstName: string
    ) {}
}

// Type and Interface are very similar, and in many cases you can choose between them freely. 
// Almost all features of an interface are available in type, 
// the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

