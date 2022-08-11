// how to create types, 
type Words = {
    // for example, object. whatever name of the key is, it doesn't matter. Followed by type string. 
    [key: string]: string
}

class Dict {
    // how to create a property
    private words: Words
    constructor() {
        // Initializing it.
        this.words = {}
    }
    // Able to use classes as types. 
    add(word: Word) {
        if(this.words[word.term] === undefined ) {
            this.words[word.term] = word.def
            console.log('words[',word.term,']: ', this.words[word.term], 'has been added in the dictionary.');
        } else {
            console.log(word.term, 'has already taken.');
        }
    }
    def(term: string) {
        return this.words[term];
    }
    remove(word: Word) {
        if(this.words[word.term] === undefined ) {
            console.log('No matching term in the dictionary.');
        } else {
            delete this.words[word.term];
            console.log(word.term, 'has been deleted in the dictionary.');
        }
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

// Creating a Word class object. 
const kimchi = new Word('kimchi', 'korean food');

// Creating a Dict class object. 
const dict = new Dict();

// Pluging 'kimchi' object into a dictionary object using add method.
dict.add(kimchi);
console.log('1: ', dict.def('kimchi'));
dict.remove(kimchi);
console.log('2: ', dict.def('kimchi'));
dict.add(kimchi);
console.log('3: ', dict.def('kimchi'));