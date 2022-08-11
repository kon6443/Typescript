var Dict = /** @class */ (function () {
    function Dict() {
        // Initializing it.
        this.words = {};
    }
    // Able to use classes as types. 
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
            console.log('words[', word.term, ']: ', this.words[word.term], 'has been added in the dictionary.');
        }
        else {
            console.log(word.term, 'has already taken.');
        }
    };
    Dict.prototype.def = function (term) {
        return this.words[term];
    };
    Dict.prototype.remove = function (word) {
        if (this.words[word.term] === undefined) {
            console.log('No matching term in the dictionary.');
        }
        else {
            delete this.words[word.term];
            console.log(word.term, 'has been deleted in the dictionary.');
        }
    };
    return Dict;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
// Creating a Word class object. 
var kimchi = new Word('kimchi', 'korean food');
// Creating a Dict class object. 
var dict = new Dict();
// Pluging 'kimchi' object into a dictionary object using add method.
dict.add(kimchi);
console.log('1: ', dict.def('kimchi'));
dict.remove(kimchi);
console.log('2: ', dict.def('kimchi'));
dict.add(kimchi);
console.log('3: ', dict.def('kimchi'));
