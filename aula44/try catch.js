//Throw, and Try...Catch...Finally
//The try statement defines a code block to run (to try).
//The catch statement defines a code block to handle any error.
//The finally statement defines a code block to run regardless of the result.
//The throw statement defines a custom error.

function soma(x, y) {
    if (
        typeof x !== 'number' || typeof y !== 'number' 
    ) {
        throw('x e y precisam ser números.')
    }
    return x + y
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log(error);
}

function soma(x, y) {
    if (
        typeof x !== 'number' || typeof y !== 'number' 
    ) {
        throw new SyntaxError('x e y precisam ser números.')
    }
    return x + y
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log(error);
}
console.log(5+5)