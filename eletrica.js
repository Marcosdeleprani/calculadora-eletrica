let nome = prompt("digite o nome do item: ");
let medida = parseInt(prompt("1-para W\n2-para kW: "));
let tempo = parseFloat(prompt("digite tempo medio de uso diario: "));
let potencia = parseFloat(prompt("digite a potencia do aparelho: "));
let valorcasa = parseFloat(prompt("digite qunato custa o kWh na sua casa: "));
let consumo;
if(medida==1){
    potencia = potencia/1000;
}
else if(medida==2){
    potencia = potencia;
}
else{console.log("erro na medida");}

let kWh = potencia * tempo;
let kWhmes = kWh * 30;
let valordiario = kWh * valorcasa;
let valormes = valordiario * 30;

console.log("nome: ",nome,"\n");
console.log("consumo mensal: ",kWhmes,"\n");
console.log("total gasto: ",valormes,"\n");