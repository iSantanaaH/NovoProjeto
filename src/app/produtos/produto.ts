export class Produto {
    id: number;
    nome: string;
    valor: number;
    valorPromo: number;
    imagem: string;

    constructor(_id: number, _nome: string, _valor: number, _valorPromo: number, _imagem: string) {
        this.id = _id;
        this.nome = _nome;
        this.valor = _valor;
        this.valorPromo = _valorPromo;
        this.imagem = _imagem;
    }
}