// new type -> BigInt
// safe number
Number.MAX_SAFE_INTEGER;

// we use BigInt when we perform operations on larger number then the safe integer
Number.MAX_SAFE_INTEGER + 2n;
typeof(2n);

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning'
    }
}

let jim_pokemon = {
    Pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: '0'
    }
}

let weight = will_pokemon.pikachu.weight
let weight2 = jim_pokemon.pikachu.weight //error

//  Optional Chaining Operator ?.
let weight3 = jim.pokemon?.pikachu?.weight
// returns undefined

// Nullish Coalescing Operator ??
let power = jim_pokemon?.pikachu?.power || 'no power' //returns no power
let power = jim_pokemon?.pikachu?.power ?? 'no power' //returns 0, as long as it is not null, it will return