import { Produto } from "../domain/models/produto.model";
import { ProdutoRepository } from "../domain/repositories/produto.repository";

export interface CriarProdutoDTO {
  nome: string;
  preco: number;
}

export class ProdutoService {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async listar(): Promise<Produto[]> {
    return this.produtoRepository.listar();
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    return this.produtoRepository.buscarPorId(id);
  }

  async criar(dados: CriarProdutoDTO): Promise<Produto> {
    if (typeof dados?.nome !== "string" || dados.nome.trim() === "") {
      throw new Error("nome é obrigatório");
    }

    if (typeof dados?.preco !== "number" || !Number.isFinite(dados.preco) || dados.preco < 0) {
      throw new Error("preço deve ser um número maior ou igual a zero");
    }

    const produtos = await this.produtoRepository.listar();
    const id = produtos.length === 0 ? 1 : Math.max(...produtos.map((produto) => produto.id)) + 1;

    const produto = new Produto({
      id,
      nome: dados.nome.trim(),
      preco: dados.preco
    });

    return this.produtoRepository.criar(produto);
  }
}
