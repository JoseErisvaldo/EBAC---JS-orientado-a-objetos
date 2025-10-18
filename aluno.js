//Crie uma classe Aluno com propriedades nome, idade e notas, e um
//Crie tres métodos

class aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.notas = []; // notas é um array de números
    }
    
    adicionarNota(nota) {
        this.notas.push(nota)
    }

    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0)
        return soma / this.notas.length
    }

    descrever() {
        const media = this.notas.length ? this.calcularMedia().toFixed(2) : 0
        return `Nome: ${this.nome}, Idade: ${this.idade}, Média das notas: ${media}`
    }
}

const aluno1 = new aluno('José', 27)
aluno1.adicionarNota(8)
aluno1.adicionarNota(7)
aluno1.adicionarNota(6)
aluno1.adicionarNota(8)
aluno1.adicionarNota(10)
console.log(aluno1)
console.log(aluno1.descrever())