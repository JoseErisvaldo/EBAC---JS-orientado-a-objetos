class Pessoa {
  constructor(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  }

  getnome() {
    return this._nome;
  }

  getidade() {
    return this._idade;
  }

  setnome(novonome) {
    this._nome = novonome;
  }

  setidade(novaidade) {
    this._idade = novaidade;
  }
}

const pessoa1 = new Pessoa('Pedro', 25);
console.log(`Nome: ${pessoa1.getnome()}, Idade: ${pessoa1.getidade()}`);

pessoa1.setnome('Maria');
pessoa1.setidade(26);
console.log(`Nome: ${pessoa1.getnome()}, Idade: ${pessoa1.getidade()}`);
