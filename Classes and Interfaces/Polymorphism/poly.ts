// Since Storage interface already exists as WEB API, we are naming SStorage instead of Storage. 

interface SStorage<T> {
    [key: string]: T
}

class LocalStorage<T> {
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key];
    }
    get(key: string):T {
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

// Typescript is creating the call signature based on the generic. 
const stringsStorage = new LocalStorage<string>();
// Return value is string since above code is using string type.
stringsStorage.get("xxx");
// The second parameter should be type of string since the variable stringsStorage is made out of string type.
// Try to hover set method below.
stringsStorage.set("hello", );


const booleansStorage = new LocalStorage<boolean>();
// Return value is boolean since above code is using boolean type. 
booleansStorage.get("xxx");
// The second parameter should be type of boolean since the variable booleansStorage is made out of boolean type. 
// Try to hover set method below.
booleansStorage.set("hello", );