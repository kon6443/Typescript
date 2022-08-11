// absctract class is a class that other classes can inherite from but is a class that you cannot creat a new instance directly.
// 추상클래스란 다른 클래스가 상속받을 수 있는 클래스이다. 하지만 추상클래스는 직접 새로운 인스턴스를 만들 수 없다. 

abstract class User {
    constructor(
        // below protected variables are now protected from other functions meaning that not accessible from out side of this method.
        // but class that is inherited from abstract class can access protected variable even though it is not public.

        // ----- example -----
        // private variable can be accessed from only User class not even Player class.
        // protected variable can be accessed from User class and also Player class.
        
        protected firstName: string,
        protected lastName: string,
        protected nickName: string
    ) {}
    abstract getNickName(): void
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User {
    getNickName(): void {
        
    }
}

const five = new Player('five', 'south', 'nicky');
console.log(five);
console.log(five.getFullName());