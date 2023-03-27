class Clientes {
    constructor() {
        this._clientes = new Array;
        const c1 = new Conta('1', 100);
        const p1 = new Poupanca('2', 100);
        const cb1 = new ContaBonificada('3', 0);
        const cliente1 = new Cliente("Savio", "1000", c1)
        const cliente2 = new Cliente("Antony", "1578", p1);
        const cliente3 = new Cliente("Quixaba", "2000", cb1);
        this._clientes.push(cliente1, cliente2, cliente3);

    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const id = this._clientes.findIndex((cliente) => cliente.cpf === cpf);
        this._clientes.splice(id, 1);
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        const cliente = this._clientes.find((cliente) => cliente.cpf === cpf);
        return cliente;
    }
}
