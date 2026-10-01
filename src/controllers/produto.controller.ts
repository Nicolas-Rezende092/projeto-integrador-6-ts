import { Request, Response } from "express";
import { CriarProdutoDTO, ProdutoService } from "../services/produto.service";

interface ProdutoParams {
  id: string;
}

export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  listar = async (_req: Request, res: Response): Promise<void> => {
    const produtos = await this.produtoService.listar();
    res.status(200).json(produtos);
  };

  buscarPorId = async (
    req: Request<ProdutoParams>,
    res: Response
  ): Promise<void> => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({ mensagem: "id deve ser um número inteiro positivo" });
      return;
    }

    const produto = await this.produtoService.buscarPorId(id);

    if (!produto) {
      res.status(404).json({ mensagem: "Produto não encontrado" });
      return;
    }

    res.status(200).json(produto);
  };

  criar = async (
    req: Request<{}, {}, CriarProdutoDTO>,
    res: Response
  ): Promise<void> => {
    try {
      const produto = await this.produtoService.criar(req.body);
      res.status(201).json(produto);
    } catch (error) {
      const mensagem = error instanceof Error ? error.message : "Erro ao criar produto";
      res.status(400).json({ mensagem });
    }
  };
}
