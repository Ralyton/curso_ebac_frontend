function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}
  
function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

let resultado = multiplicacao(2, 5)
let cumprimento = saudacao('Ralyton')

console.log(resultado)
console.log(cumprimento)