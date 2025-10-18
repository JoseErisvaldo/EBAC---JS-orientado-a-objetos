class animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

class cachorro extends animal {
    constructor(nome, idade, raca) {
        super(nome, idade, raca);
        this.raca = raca;
    }
    latir() {
        console.log(`${this.nome} diz: Au Au!`);
    }
}

const animal1 = new animal("Rex", 5);
animal1.apresentar();

const cachorro1 = new cachorro("Buddy", 3, "Labrador");
cachorro1.apresentar();
cachorro1.latir();

const cachorro2 = new cachorro("Max", 4, "Beagle");
cachorro2.apresentar();
cachorro2.latir();