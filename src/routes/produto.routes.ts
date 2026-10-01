import { Router } from "express";
import { ProdutoController } from "../controllers/produto.controller";
import { ProdutoRepositoryMemoria } from "../repositories/in-memory/produto.repository";
import { ProdutoService } from "../services/produto.service";

const router = Router();

const produtoRepository = new ProdutoRepositoryMemoria();
const produtoService = new ProdutoService(produtoRepository);
const produtoController = new ProdutoController(produtoService);

router.get("/", produtoController.listar);
router.get("/:id", produtoController.buscarPorId);
router.post("/", produtoController.criar);

export default router;
