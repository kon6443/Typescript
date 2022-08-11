function superPrint<V>(a: V[]) {
    return a[0]
}

//  Both are the same because they are using generic type above. 
const a = superPrint([1,2,3,4]);
const b = superPrint<number>([1,2,3,4]);

type Player<Whatever> = {
    name: string,
    extraInfo: Whatever
}

type NicoExtra = {
    favFood: string
}

type nicoPlayer = Player<{ favFood: string }>

const nico: nicoPlayer = {
    name: 'nico',
    extraInfo: {
        favFood: 'kimchi'
    }
}

const lynn: Player<null> = {
    name: 'lynn',
    extraInfo: null
}

