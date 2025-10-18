//Criar uma classe Retangulo com propriedades largura e altura, e um método para calcular a área.
//Depois, criar uma instância da classe e exibir a área do retângulo.
// Saída esperada: Área do retângulo: 15
class retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

const retangulo1 = new retangulo(5, 3);
console.log(`Área do retângulo: ${retangulo1.calcularArea()}`);