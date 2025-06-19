// Lógicas de return
// Escreva uma função que recebe 2 números e
// retorne o maior deles
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(10, 2));

// Escreva uma função que recebe 2 números e
// retorne o maior deles
function max(x, y) {
    if (x > y) return x;
    return y;
}

console.log(max(10, 2));

// Escreva uma função que recebe 2 números e
// retorne o maior deles
function max(x, y) {
    return x > y ? x : y;
}

console.log(max(10, 2));

const max2 = (x, y) => {
    return x > y ? x : y;
};

console.log(max(10, 20));

const max2 = (x, y) => x > y ? x : y;
console.log(max(10, 20));