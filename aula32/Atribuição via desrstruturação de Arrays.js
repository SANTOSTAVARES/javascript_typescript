const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);

const [um_, , tres_, , cinco_, , sete_] = numeros;
console.log(um_, tres_, cinco_, sete_);
