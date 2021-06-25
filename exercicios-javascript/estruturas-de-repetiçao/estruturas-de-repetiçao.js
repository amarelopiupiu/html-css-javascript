// while
let fruit = ['apple', 'banana', 'orange']
let i = 0
let phrases = [
    ' was delicious.',
    ' was old and gross',
    ' was not yet ripe'
] 
while (i < fruit.length) {
    console.log('The ' + fruit[i] + phrases[i])
    i ++
}

// for
let states = ['Alabama', 'Alaska', 'Arizona']
for (let i = 0; i < states.length; i++) {
    console.log('Now entering ' + states[i])
}

// && (e)
let a = 3;
let b = -2;

console.log(a > 0 && b > 0);
// retorno: false

// || (ou)
let a = 3;
let b = -2;

console.log(a > 0 && b > 0);
// retorno: true