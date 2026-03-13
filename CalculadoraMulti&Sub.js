const prefixos = {
    G: 10 ** 9,
    M: 10 ** 6,
    k: 10 ** 3,
    base: 10 ** 0,
    mili: 10 ** -3,
    micro: 10 ** -6,
    nano: 10 ** -9,
};

let unidade = prompt(`digite a unidade deseja utilizar:
Corrente elétrica → A (Ampère)
Tensão elétrica → V (Volt)
Resistência elétrica → Ω (Ohm)
Potência elétrica → W (Watt)`);

let primeiroP = prompt(`prefixo do valor de entrada
    (G) para giga
    (M) para mega
    (k) para quilo
    (base) para um valor sem prefixo
    (mili) para mili
    (micro) para micro
    (nano) para nano
    `);
let segundoP = prompt(`prefixo para o qual deseja converter:
    (G) para giga
    (M) para Mega
    (k) para Quilo
    (base) para um valor sem prefixo
    (mili) para mili
    (micro) para micro
    (nano) para nano
    `);

let quantidade1 = parseFloat(prompt("Digite a quantidade que voce quer transformar : "));

let valorBase = quantidade1 * prefixos[primeiroP];
let resultadoF = valorBase / prefixos[segundoP];

if (segundoP == "base") {
    segundoP = "";
}
if (primeiroP == "base") {
    primeiroP = "";
}

console.log(quantidade1 , primeiroP , unidade , " equivalem a : " , resultadoF , " " , segundoP , unidade,"\n");
console.log(quantidade1 , primeiroP , unidade , " equivalem a : " , resultadoF , " " , segundoP , unidade,"\n");

