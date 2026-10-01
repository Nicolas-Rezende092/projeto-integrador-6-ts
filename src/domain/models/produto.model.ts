export interface ProdutoProps {
  id: number;
  nome: string;
  preco: number;
}

export class Produto {
  public readonly id: number;
  public readonly nome: string;
  public readonly preco: number;

  constructor({ id, nome, preco }: ProdutoProps) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  estaEmPromocao(): boolean {
    return this.preco < 100;
  }
}
