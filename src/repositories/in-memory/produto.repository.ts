import { Produto } from "../../domain/models/produto.model";
import { ProdutoRepository } from "../../domain/repositories/produto.repository";

export class ProdutoRepositoryMemoria implements ProdutoRepository {
  private readonly produtos: Produto[] = [
    new Produto({ id: 1, nome: "Notebook", preco: 3500 }),
    new Produto({ id: 2, nome: "Mouse", preco: 120 })
  ];

  async listar(): Promise<Produto[]> {
    return [...this.produtos];
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    return this.produtos.find((produto) => produto.id === id) ?? null;
  }

  async criar(produto: Produto): Promise<Produto> {
    this.produtos.push(produto);
    return produto;
  }
}
