class livro {
    constructor(titulo, autor, numeroPaginas) {
        this.titulo = titulo
        this.autor = autor
        this.numeroPaginas = numeroPaginas
    }

    descrever() {
        return `Titulo ${this.titulo}, Author: ${this.autor}, Numero de páginas: ${this.numeroPaginas}`
    }

    atualizaNumeroPaginas(novonumero) {
        this.numeroPaginas = novonumero
    }
}

const meuLivro = new livro('Livro A', 'José', 100)
console.log(meuLivro.descrever())
meuLivro.atualizaNumeroPaginas(99)
console.log(meuLivro.descrever())