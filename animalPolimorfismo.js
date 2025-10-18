// Classe base (superclasse)
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  // Método genérico
  fazerSom() {
    console.log('O animal faz um som.');
  }
}

// Subclasse Cachorro (herda de Animal)
class Cachorro extends Animal {
  fazerSom() {
    console.log(`${this.nome} diz: Au au! 🐶`);
  }
}

// Subclasse Gato (herda de Animal)
class Gato extends Animal {
  fazerSom() {
    console.log(`${this.nome} diz: Miau! 🐱`);
  }
}

// Subclasse Vaca (herda de Animal)
class Vaca extends Animal {
  fazerSom() {
    console.log(`${this.nome} diz: Muu! 🐮`);
  }
}

// --- Testando o polimorfismo ---
const animais = [
  new Cachorro('Rex'),
  new Gato('Mimi'),
  new Vaca('Lola'),
];

// Todos compartilham o mesmo método "fazerSom",
// mas cada um tem seu próprio comportamento.
animais.forEach(animal => animal.fazerSom());
