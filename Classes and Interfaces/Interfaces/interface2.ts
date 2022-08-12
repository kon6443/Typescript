abstract class User1 {
    constructor(
        protected firstName: string,
        protected lastName: string
    ) {}
    abstract sayHi(name: string): string
    abstract fullName(): string
}

class Player1 extends User1 {
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName}`
    }
}

interface User2 {
    firstName: string,
    lastName: string,
    sayHi(name: string): string,
    fullName(): string
}

interface Human {
    health: number
}

class Player2 implements User2, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName}`
    }
}

function makeUser(user: User2) {
    return "hi";
}

const a = makeUser({
    firstName: 'nico',
    lastName: 'last',
    fullName: () => 'xx',
    sayHi: (name) => 'string'
});

console.log(a);