// absctract class is a class that other classes can inherite from but is a class that you cannot creat a new instance directly.
// 추상클래스란 다른 클래스가 상속받을 수 있는 클래스이다. 하지만 추상클래스는 직접 새로운 인스턴스를 만들 수 없다. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(
    // below protected variables are now protected from other functions meaning that not accessible from out side of this method.
    // but class that is inherited from abstract class can access protected variable even though it is not public.
    // ----- example -----
    // private variable can be accessed from only User class not even Player class.
    // protected variable can be accessed from User class and also Player class.
    firstName, lastName, nickName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.getNickName = function () {
    };
    return Player;
}(User));
var five = new Player('five', 'south', 'nicky');
console.log(five);
console.log(five.getFullName());
