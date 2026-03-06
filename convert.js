let unidade = parseInt(prompt("1-para A\n2-para V\n3-para Ω\n4-para W: "));
let valor = parseFloat(prompt("digite o valor da medida: "));
let mili
switch(unidade){
    case 1:
    mili = valor * 1000
    break

    case 2:
    mili = valor * 1000
    break

    case 3:
    mili = valor * 1000
    break

    case 4:
    mili = valor * 1000
    break

    default:
    console.log("erro na unidade")
    break
}
console.log(valor," serao ",mili," mili")