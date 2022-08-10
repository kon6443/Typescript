type SuperPrint = {
    <T> (arr: T[]): void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(item => console.log(item));
}

// const superPrint: SuperPrint = (arr) => arr[0]

superPrint([1,2,3,4]);
superPrint([true, false, true, true]);
superPrint(['a', 'b', 'c']);
superPrint([1, 2, true, false, 'a']);