var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
            console.log('words[', word.term, ']: ', this.words[word.term]);
        }
        else {
            console.log(word.term, 'has already taken.');
        }
    };
    Dict.prototype.def = function (term) {
        return this.words[term];
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
var kimchi = new Word('kimchi', 'korean food');
var dict = new Dict();
dict.add(kimchi);
dict.add(kimchi);
console.log(dict.def('kimchi'));
