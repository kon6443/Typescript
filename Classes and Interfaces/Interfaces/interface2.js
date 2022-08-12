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
var User1 = /** @class */ (function () {
    function User1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User1;
}());
var Player1 = /** @class */ (function (_super) {
    __extends(Player1, _super);
    function Player1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player1.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Player1.prototype.sayHi = function (name) {
        return "Hello ".concat(name, ". My name is ").concat(this.fullName);
    };
    return Player1;
}(User1));
var Player2 = /** @class */ (function () {
    function Player2(firstName, lastName, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
    }
    Player2.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Player2.prototype.sayHi = function (name) {
        return "Hello ".concat(name, ". My name is ").concat(this.fullName);
    };
    return Player2;
}());
function makeUser(user) {
    return "hi";
}
var a = makeUser({
    firstName: 'nico',
    lastName: 'last',
    fullName: function () { return 'xx'; },
    sayHi: function (name) { return 'string'; }
});
console.log(a);
