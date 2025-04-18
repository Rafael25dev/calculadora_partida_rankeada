//Função principal com calculo de Saldo
function calcularRank (vitorias, derrotas){
    let saldo = vitorias - derrotas
    let nivel;

//Estrutura de decisão para descubrir nível do herói
if (vitorias < 10){
    nivel = 'Ferro';
}   else if (vitorias >= 11 && vitorias <= 20){
    nivel = 'Bronze';
}   else if (vitorias >= 21 && vitorias <= 50){
    nivel = 'Prata';
}   else if (vitorias >= 51 && vitorias <= 80){
    nivel = 'Ouro';
}   else if (vitorias >= 81 && vitorias <= 90){
    nivel = 'diamante';
}   else if (vitorias >= 91 && vitorias <= 100){
    nivel = 'Lendário';
}   else {
    nivel = 'Imortal';
}

//Exibição do resultado
console.log (`O Herói tem saldo de ${saldo} e está no nível: ${nivel}`);
}

//Chamada da função
calcularRank (85, 10);
calcularRank (150, 30);