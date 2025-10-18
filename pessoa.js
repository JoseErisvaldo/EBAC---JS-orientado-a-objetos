// Definição da classe Pessoa
// Criar uma classe Pessoa com propriedades nome e idade, e um método para apresentar a pessoa.
// Depois, criar uma instância da classe e chamar o método de apresentação.
// Saída esperada: Olá, meu nome é José e eu tenho 27 anos.

class pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new pessoa("José", 27)
 
// Chamar o método para exibir a apresentação
pessoa1.apresentar();